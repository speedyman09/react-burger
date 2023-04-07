import React from "react";
import { useState, useEffect, useMemo } from "react";
import styles from "./styles.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { BASE_URL } from "../../vars/vars";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { IngredientContext } from "../../context/IngredientContext";
import { createStore } from "redux";
import { rootReducer } from "../../services/rootReducer";
let store = createStore(rootReducer);
const selectedIngredientIds = [
  "60d3b41abdacab0026a733c6",
  "60d3b41abdacab0026a733d4",
  "60d3b41abdacab0026a733c9",
  "60d3b41abdacab0026a733d3",
  "60d3b41abdacab0026a733cc",
];

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getIngredients = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/ingredients`);

        if (!response.ok)
          throw new Error(
            `An error occurred while fetching ingredients: ${response.statusText}`
          );

        const ingredients = await response.json();
        setIngredients(ingredients.data);
        // setLoading(false);
      } catch (err) {
        // setLoading(false);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getIngredients();
  }, []);
  const selectedIngredients = useMemo(() => {
    return ingredients.filter(
      (item) => selectedIngredientIds.includes(item["_id"])
      // console.log(item['_id'])
    );
  }, [ingredients]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`${styles.main} p-5`}>
        {loading ? (
          <span>Загружаем ингредиенты...</span>
        ) : (
          <IngredientContext.Provider value={selectedIngredients}>
            <BurgerIngredients data={ingredients} />
            <BurgerConstructor />
          </IngredientContext.Provider>
        )}
      </main>
    </div>
  );
}

export default App;
