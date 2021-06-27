export function getAllProduct() {
    return fetch("https://salty-taiga-93281.herokuapp.com/api/products")
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.error("getAllProduct Error ====>", error);
          throw error;
        }
      );
  }
  