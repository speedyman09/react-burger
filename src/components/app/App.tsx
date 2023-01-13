import React from "react";
import { useState, useEffect, useMemo } from "react";
import styles from "./styles.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { ingredientsApiUrl } from "../../vars/vars";

// const selectedIngredientIds = [
//   "60666c42cc7b410027a1a9b1",
//   "60666c42cc7b410027a1a9b4",
//   "60666c42cc7b410027a1a9b9",
//   "60666c42cc7b410027a1a9bc",
// ];

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getIngredients = async () => {
      try {
        setLoading(true);
        const response = await fetch(ingredientsApiUrl);

        if (!response.ok)
          throw new Error(
            `An error occurred while fetching ingredients: ${response.statusText}`
          );

        const ingredients = await response.json();
        setIngredients(ingredients.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    };

    getIngredients();
  }, []);
  // const selectedIngredients = useMemo(() => {
  //   return ingredients.filter((item) =>
  //   selectedIngredientIds.includes(item._id)
  //   );
  // }, [ingredients]);
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`${styles.main} p-5`}>
        {loading ? (
          <span>Загружаем ингредиенты...</span>
        ) : (
          <>
            <BurgerIngredients data={ingredients} />
            
          </>
        )}
      </main>
    </div>
  );
}

export default App;
