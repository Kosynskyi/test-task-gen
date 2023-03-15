import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import VideoJS from 'components/VideoJS/VideoJS';
import { useGetCourseDetailsQuery } from 'redux/CourseSlice';
import { Box } from 'utils/Box';

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();
  const playerRef = useRef(null);

  const { data } = useGetCourseDetailsQuery(courseId);

  const videoJsOptions = {
    // autoplay: true,
    width: '750',
    heigth: '500',
    controls: true,
    responsive: true,
    poster:
      'https://wisey.app/assets/images/web/course-covers/cognitive-animation/cover.webp',
    fluid: true,
    sources: [
      {
        src: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8',
        type: 'application/x-mpegURL',
      },
    ],
  };

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

  useEffect(() => {
    setCourse(data);
  }, [data]);

  console.log('data', data);

  if (!data) return;

  const {
    title,
    description,
    lessons,
    // rating,
    // status,
    // containsLockedLessons,
    // meta,
  } = data;

  console.log(lessons[0].previewImageLink + '/cover.webp');
  return (
    <Box>
      <Box>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </Box>
      <h2>{title}</h2>
      <p>{description}</p>
      {/* <ul>
        {lessons.map(({ id, previewImageLink, status, title, order }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{status}</p>
          </li>
        ))}
      </ul> */}
    </Box>
  );
};

export default CourseDetails;
