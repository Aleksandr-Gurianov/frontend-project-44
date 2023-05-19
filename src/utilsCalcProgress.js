function getProgression(min, max) {
  const getNumber = Math.random() * (max - min) + min; return Math.floor(getNumber);
}
export default getProgression;
