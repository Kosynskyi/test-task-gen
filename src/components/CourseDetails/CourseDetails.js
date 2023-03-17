import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import VideoJS from 'components/VideoJS/VideoJS';
import { useGetCourseDetailsQuery } from 'redux/CourseSlice';
import { Box } from 'utils/Box';
import { normalizedDuration, lockedDuration } from 'helpers/helpFunctions';
import {
  Wrapper,
  ImageWrapper,
  CourseTitle,
  Description,
  CourseDuration,
  Quantity,
  NotAvailableLessons,
  Subtitle,
  LessonTitle,
  ButtonArrow,
  StatusText,
  IconLock,
  IconUnlock,
  VideoWrapper,
} from './CourseDetails.styled';

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();
  const playerRef = useRef(null);
  const { data } = useGetCourseDetailsQuery(courseId);
  const [currentIndexVideo, setCurrentIndexVideo] = useState(
    localStorage.getItem('currentIndexVideo') ?? 0
  );

  useEffect(() => {
    if (!data) return;
    setCourse(data);
    localStorage.setItem('currentIndexVideo', currentIndexVideo);
  }, [currentIndexVideo, data]);

  if (course) {
    const poster = document.querySelector('.vjs-poster img');
    poster.style.objectFit = 'cover';
  }

  const handlePlayerReady = player => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      // videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      // videojs.log('player will dispose');
    });
  };

  if (!data) return;

  const {
    title,
    description,
    lessons,
    previewImageLink,
    duration,
    rating,
    containsLockedLessons,
  } = data;

  // console.log('lessons', lessons);

  const handleChangeLesson = (lessons, idx) => {
    const poster =
      lessons[idx]?.previewImageLink +
      '/lesson-' +
      lessons[idx]?.order +
      '.webp';
    const src = lessons[idx]?.link;

    const videoJsOptions = {
      width: '900',
      heigth: '400',
      controls: true,
      responsive: true,
      poster,
      fluid: true,
      sources: [
        {
          src,
          type: 'application/x-mpegURL',
        },
      ],
    };
    return videoJsOptions;
  };

  const nextLesson = (lessons, idx) => {
    setCurrentIndexVideo(prev =>
      Number(idx) === Number(lessons.length - 1) ? 0 : prev + 1
    );
  };

  const prevLesson = (lessons, idx) => {
    setCurrentIndexVideo(prev =>
      Number(idx) === 0 ? lessons.length - 1 : prev - 1
    );
  };

  return (
    <Box pb={7}>
      <Wrapper>
        <ImageWrapper>
          <img
            src={previewImageLink + '/cover.webp'}
            alt={title}
            width="300px"
          />
        </ImageWrapper>
        <Box>
          <CourseTitle>{title}</CourseTitle>
          <Description>{description}</Description>
          <CourseDuration>
            Available duration:{' '}
            <Quantity>{normalizedDuration(duration)}</Quantity>
          </CourseDuration>
          {containsLockedLessons ? (
            <CourseDuration>
              Has locked lessons:{' '}
              <NotAvailableLessons>
                {normalizedDuration(lockedDuration(lessons))}
              </NotAvailableLessons>
            </CourseDuration>
          ) : (
            <CourseDuration>All lessons are available</CourseDuration>
          )}
          <CourseDuration>
            Rating: <Quantity>{rating}</Quantity>
          </CourseDuration>
        </Box>
      </Wrapper>

      <Box>
        <Box mb={4}>
          <Subtitle>Lesson {lessons[currentIndexVideo].order}</Subtitle>
          <LessonTitle>{lessons[currentIndexVideo].title}</LessonTitle>

          <StatusText>
            Status:{' '}
            {lessons[currentIndexVideo].status === 'locked' ? (
              <IconLock color="red" size="24px" />
            ) : (
              <IconUnlock color="green" size="24px" />
            )}
          </StatusText>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <ButtonArrow onClick={() => prevLesson(lessons, currentIndexVideo)}>
            {<FiArrowLeft size="32px" />}
          </ButtonArrow>
          <VideoWrapper>
            <VideoJS
              options={handleChangeLesson(lessons, currentIndexVideo)}
              onReady={handlePlayerReady}
            />
          </VideoWrapper>

          <ButtonArrow onClick={() => nextLesson(lessons, currentIndexVideo)}>
            {<FiArrowRight size="32px" />}
          </ButtonArrow>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetails;
