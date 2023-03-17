export const normalizedDuration = num => {
  const hours = Math.floor(num / 60);
  const minutes = num - hours * 60;
  return `${hours} hours ${minutes} minutes`;
};

export const lockedDuration = arr =>
  arr
    .filter(({ status }) => status === 'locked')
    .reduce((acc, { duration }) => acc + duration, 0);
