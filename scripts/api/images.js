export const loadImage = (path) => {
  return new Promise((resolve, reject) => {
    return fetch(path)
    .then(res => {
      res.ok ? resolve(res) : reject(res);
    })
    .catch(err => reject(err));
  });
}