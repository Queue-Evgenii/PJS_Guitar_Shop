export const getProducts = () => {
  return new Promise((resolve, reject) => {
    fetch("../../data/categories.json")
    .then(response => {
      if (!response.ok) {
        reject("getProducts Err", `HTTP error! status: ${response.status}`)
      }
      return response.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject("getProducts Err", err);
    });
  })
}