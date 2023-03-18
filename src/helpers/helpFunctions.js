export const normalizedDuration = num => {
  const hours = Math.floor(num / 60);
  const minutes = num - hours * 60;
  return `${hours} hours ${minutes} minutes`;
};

export const lockedDuration = arr =>
  arr
    .filter(({ status }) => status === 'locked')
    .reduce((acc, { duration }) => acc + duration, 0);

export const handleChangeLesson = (lessons, idx) => {
  const poster =
    lessons[idx]?.previewImageLink + '/lesson-' + lessons[idx]?.order + '.webp';
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
