
export default function apiFetchSavedCart() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { title: "shoes", price: 10 },
        { title: "car", price: 1000 }
      ]);
    }, 1000);
  });
}
