const groceriesList = () => {
  const res = new Map();
  const objectos = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(objectos)) {
    res.set(key, objectos[key]);
  }
  return res;
};

export default groceriesList;
