import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = props => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    if (!playerRef.current) {
      // window.addEventListener('beforeunload', () => {
      //   const savedTime = localStorage.setItem('savedTime');
      //   player.currentTime(savedTime);

      //   console.log(777);
      // });
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);

      function onLoad() {
        const savedTime = localStorage.getItem('savedTime');
        player.currentTime(savedTime);
      }

      onLoad();
      //
      // window.addEventListener('beforeunload', () => {
      //   const savedTime = localStorage.getItem('savedTime');
      //   player.currentTime(savedTime);
      //   console.log(777);
      // });
      // =====
    }
  }, [onReady, options]);

  useEffect(() => {
    const player = playerRef.current;
    const currentTime = player.currentTime();
    localStorage.setItem('savedTime', currentTime);
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;
