import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import VideoJS from 'components/VideoJS/VideoJS';
import { useGetCourseDetailsQuery } from 'redux/CourseSlice';
import { Box } from 'utils/Box';
import {
  normalizedDuration,
  lockedDuration,
  otherLessonFunc,
} from 'helpers/helpFunctions';
import { StyledButton } from 'components/Button/Button.styled';
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
} from './CourseDetails.styled';

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();
  const playerRef = useRef(null);
  const { data } = useGetCourseDetailsQuery(courseId);
  const [otherLessons, setOtherLessons] = useState([]);

  useEffect(() => {
    if (!data) return;
    setCourse(data);
  }, [data]);

  if (course) {
    const poster1 = document.querySelector('.vjs-poster img');
    poster1.style.objectFit = 'cover';
  }
  // const handleHotkeys = event => {
  //   console.log(event);
  // };

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

  const loadMore = () => {
    console.log(333);
    setOtherLessons(otherLessonFunc(data?.lessons));
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

  console.log('otherLessons', otherLessons);
  const poster =
    lessons[0]?.previewImageLink + '/lesson-' + lessons[0]?.order + '.webp';
  const src = lessons[0]?.link;

  const videoJsOptions = {
    width: '640',
    heigth: '500',
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
            Available duration:
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
      <Subtitle>Lesson {lessons[0].order}</Subtitle>
      <LessonTitle>{lessons[0].title}</LessonTitle>
      <Box>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </Box>

      {/* <video
        src="https://www.youtube.com/watch?v=eVKm12T0BPg"
        type="application/x-mpegURL"
        width="480"
        controls
        poster={poster}
      >
        <sourse  />
      </video> */}
      {/* <ul>
        {lessons.map(({ id, previewImageLink, status, title, order }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{status}</p>
          </li>
        ))}
      </ul> */}

      {otherLessons.length === 0 && (
        <Box display="flex" justifyContent="center" mt={5}>
          <StyledButton onClick={() => loadMore()}>
            Load all lessons
          </StyledButton>
        </Box>
      )}
      {otherLessons.length > 0 && (
        <ul>
          {otherLessons.map(({ id, order, title }) => (
            <li key={id}>
              <Subtitle>Lesson {order}</Subtitle>
              <LessonTitle>{title}</LessonTitle>
              <Box>
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
              </Box>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default CourseDetails;
