import React from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredientsData } from '../../services/actions/ingredients';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getIngredientsData())
  }, [dispatch]);
  
   
  return (
    <div className={styles.app}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={styles.main}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </main>
      </DndProvider>
    </div>
  );
}

export default App;
