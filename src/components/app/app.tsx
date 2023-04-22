import React from "react";
import { useState, useEffect, useMemo } from "react";
import styles from "./styles.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { BASE_URL } from "../../vars/vars";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { IngredientContext } from "../../context/IngredientContext";
import { applyMiddleware, createStore} from "redux";
import { Provider, useSelector} from "react-redux";
import { rootReducer } from "../../services/reducers/rootReducer";
import { getIngredients } from "../../services/actions/burger-ingredients";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools (
  applyMiddleware (thunk),
));
;
const selectedIngredientIds = [
  "643d69a5c3f7b9001cfa093c",
  "643d69a5c3f7b9001cfa093f",
  "643d69a5c3f7b9001cfa0946",
];

function App() {
  getIngredients();
  // const redIngredients = useSelector(state => state.ingredients);

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
    <Provider store={store}>
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
   </Provider>
  );
}

export default App;
