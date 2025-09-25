export const fetchData = async () => {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await fetch(
      "https://68d4ebece29051d1c0ac8661.mockapi.io/Products"
    );

    if (!response.ok) {
      throw new Error(`Помилка мережі: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка при завантаженні даних:", error);
    throw error;
  }
};
