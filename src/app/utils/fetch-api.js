export function getAllProduct() {
    return fetch("http://localhost:8080/api/products")
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
  