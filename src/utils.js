function randomRange() {
  const max = 35;
  const min = 5;
  const getNumber = Math.random() * (max - min) + min; return Math.floor(getNumber);
}
export default randomRange;
