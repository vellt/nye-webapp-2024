function createString(length = 2) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const LIST = new Array(100).fill(undefined).map((_, index) => ({
  id: index + 1,
  name: createString(5),
}));

const generated = new Array(1000).fill(undefined).map(() => LIST[Math.floor(Math.random() * LIST.length)]);
export default JSON.stringify(generated);
