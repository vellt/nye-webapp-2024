// @ts-ignore
const generate = () => {
  const from = Object.keys(types);
  const index = Math.floor(Math.random() * from.length);
  const type = from[index];
  // @ts-ignore
  return type in types ? types[(type)]?.() : null;
};

function createString() {
  const length = Math.floor(Math.random() * 10) + 1;
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const createBoolean = () => {
  return Math.round(Math.random() * 2) % 2 === 0;
}

const createNumber = () => {
  const nan = Math.floor(Math.random() * 100) % 20 === 0;
  return nan ? NaN : Math.round(Math.random() * 10000);
}

// @ts-ignore
const createObject = () => {
  return {
    [createString()]: generate()
  };
}

// @ts-ignore
const createArray = (length = 5) => {
  return new Array(Math.floor(Math.random() * length) + 1).fill(undefined).map(generate);
}

const types = {
  'string': createString,
  'boolean': createBoolean,
  'number': createNumber,
  'object': createObject,
  'array': createArray,
};

const arr = createArray(10);
export default JSON.stringify(arr);
