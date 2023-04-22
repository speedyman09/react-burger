import { useState, useMemo, useRef, useEffect, useLayoutEffect} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "./ingredient/ingredient";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

import IngredientType from "../../types/ingredient-type";
import { InView, useInView } from "react-intersection-observer";
// import { Link, Element, Events } from "react-scroll";
import { Element, scroller, Events } from "react-scroll";


  
  // function BurgerIngredients({ data }) {
  //   const [current, setCurrent] = useState("bun");
  

  //   const refsMap = {
  //     bun: useRef(null),
  //     sauce: useRef(null),
  //     main: useRef(null),
  //   };
  //   const groupedIngredients = useMemo(() => {
  //     return data.reduce((group, ingredient) => {
  //       const { type } = ingredient;
  //       group[type] = group[type] ?? [];
  //       group[type].push(ingredient);
  //       return group;
  //     }, {});
  //   }, [data]);
  //   const onTabClick = (key) => {
  //     setCurrent(key);
  //     refsMap[key].current.scrollIntoView({ behavior: "smooth" });
  //   };
  //   return (
  //     <section className={`${styles.section} mr-5`}>
  //       <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
  //       <div className={`${styles.tabsContainer} mb-10`}>

          
  //         <Tab value="bun" active={current === "bun"} onClick={onTabClick} >
  //             Булки
  //         </Tab>
          
  //         <Tab value="main" active={current === "main"} onClick={onTabClick} >
  //           Начинки
  //         </Tab>
          

  //         <Tab value="sauce" active={current === "sauce"} onClick={onTabClick} >
  //           Соусы
  //         </Tab>
          

  //       </div>
  //       <section className={`${styles.ingredientsList} custom-scroll`}>
  //         {Object.entries(groupedIngredients).map(([key, items]) => {
  //           return (
  //             <section ref={refsMap[key]} key={key}>
                
  //               <p className="text text_type_main-medium">{typesTitleMap[key]}</p>
  //               <div className={styles.grid}>
  //                 {items.map((item) => (
  //                   <Ingredient data={item} key={item._id} />
  //                 ))}
  //               </div>
                
  //             </section>
  //           );
  //         })}
  //       </section>
  //     </section>
  //   );
  // }

  // Реализация нажатия на переключатель
// function BurgerIngredints({ data }) {
//     const [current, setCurrent] = useState("bun");
  
//     const refBun = useRef(null);
//     const refSauce = useRef(null);
//     const refMain = useRef(null);
  
//     const refsMap = {
//       bun: refBun,
//       sauce: refSauce,
//       main: refMain,
//     };

//   const handleIntersection = (inView, entry) => {
//     if (inView) {
//       setCurrent(entry.target.id);
//     }
//   };

//   const groupedIngredients = useMemo(() => {
//     return data.reduce((group, ingredient) => {
//       const { type } = ingredient;
//       group[type] = group[type] ?? [];
//       group[type].push(ingredient);
//       return group;
//     }, {});
//   }, [data]);

//   const onTabClick = (key) => {
//     setCurrent(key);
//     refsMap[key]?.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className={`${styles.section} mr-5`}>
//       <h1 className="text text_type_main-large mt-10 mb-5">
//         Соберите бургер
//       </h1>
//       <div className={`${styles.tabsContainer} mb-10`}>
//         <Tab value="bun" active={current === "bun"} onClick={onTabClick}>
//           Булки
//         </Tab>
//         <Tab value="sauce" active={current === "sauce"} onClick={onTabClick}>
//           Соусы
//         </Tab>
//         <Tab value="main" active={current === "main"} onClick={onTabClick}>
//           Начинки
//         </Tab>
//       </div>
//       <section className={`${styles.ingredientsList} custom-scroll`}>
//         <section
//           ref={refBun}
//           id="bun"
//           key="bun"
//           onChange={(inView, entry) => handleIntersection(inView, entry)}
//         >
//           <p className="text text_type_main-medium">{typesTitleMap["bun"]}</p>
//           <div className={styles.grid}>
//             {groupedIngredients["bun"] &&
//               groupedIngredients["bun"].map((item) => (
//                 <Ingredient data={item} key={item._id} />
//               ))}
//           </div>
//         </section>
//         <section
//           ref={refSauce}
//           id="sauce"
//           key="sauce"
//           onChange={(inView, entry) => handleIntersection(inView, entry)}
//         >
//           <p className="text text_type_main-medium">{typesTitleMap["sauce"]}</p>
//           <div className={styles.grid}>
//             {groupedIngredients["sauce"] &&
//               groupedIngredients["sauce"].map((item) => (
//                 <Ingredient data={item} key={item._id} />
//               ))}
//           </div>
//         </section>
//         <section
//           ref={refMain}
//           id="main"
//           key="main"
//           onChange={(inView, entry) => handleIntersection(inView, entry)}
//         >
//           <p className="text text_type_main-medium">{typesTitleMap["main"]}</p>
//           <div className={styles.grid}>
//             {groupedIngredients["main"] &&
//               groupedIngredients["main"].map((item) => (
//                 <Ingredient data={item} key={item._id} />
//               ))}
//           </div>
//         </section>
//       </section>
//     </section>
//   );
// }

// function BurgerIngredients({ data }) {
//   const [current, setCurrent] = useState("bun");

//   const [refBun, inViewBun] = useInView({ threshold: 0.8});
//   const [refSauce, inViewSauce] = useInView({ threshold: 0.5 });
//   const [refMain, inViewMain] = useInView({ threshold: 0.3 });

//   useEffect(() => {
//     if (inViewBun) setCurrent("bun");
//     if (inViewSauce) setCurrent("sauce");
//     if (inViewMain) setCurrent("main");
//   }, [inViewBun, inViewSauce, inViewMain]);

//   const groupedIngredients = useMemo(() => {
//     return data.reduce((group, ingredient) => {
//       const { type } = ingredient;
//       group[type] = group[type] ?? [];
//       group[type].push(ingredient);
//       return group;
//     }, {});
//   }, [data]);

//   return (
//     <section className={`${styles.section} mr-5`}>
//       <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
//       <div className={`${styles.tabsContainer} mb-10`}>
//         <Tab value="bun" active={current === "bun"} onClick={() => setCurrent("bun")}>
//           Булки
//         </Tab>
//         <Tab value="sauce" active={current === "sauce"} onClick={() => setCurrent("sauce")}>
//           Соусы
//         </Tab>
//         <Tab value="main" active={current === "main"} onClick={() => setCurrent("main")}>
//           Начинки
//         </Tab>
//       </div>
//       <section className={`${styles.ingredientsList} custom-scroll`}>
//         <section ref={refBun} key="bun">
//           <p className="text text_type_main-medium">{typesTitleMap["bun"]}</p>
//           <div className={styles.grid}>
//             {groupedIngredients.bun && groupedIngredients.bun.map((item) => (
//               <Ingredient data={item} key={item._id} />
//             ))}
//           </div>
//         </section>
//         <section ref={refSauce} key="sauce">
//           <p className="text text_type_main-medium">{typesTitleMap["sauce"]}</p>
//           <div className={styles.grid}>
//             {groupedIngredients.sauce && groupedIngredients.sauce.map((item) => (
//               <Ingredient data={item} key={item._id} />
//             ))}
//           </div>
//         </section>
//         <section ref={refMain} key="main">
//           <p className="text text_type_main-medium">{typesTitleMap["main"]}</p>
//           <div className={styles.grid}>
//             {groupedIngredients.main && groupedIngredients.main.map((item) => (
//               <Ingredient data={item} key={item._id} />
//             ))}
//           </div>
//         </section>
//       </section>
//     </section>
//   );
// }
const typesTitleMap = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки",
};

function BurgerIngredients({ data }) {
  const [current, setCurrent] = useState("bun");

  const refsMap = {
    bun: useRef(null),
    sauce: useRef(null),
    main: useRef(null),
  };
  const groupedIngredients = useMemo(() => {
    return data.reduce((group, ingredient) => {
      const { type } = ingredient;
      group[type] = group[type] ?? [];
      group[type].push(ingredient);
      return group;
    }, {});
  }, [data]);
  const onTabClick = (key) => {
    setCurrent(key);
    refsMap[key].current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section className={`${styles.section} mr-5`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={`${styles.tabsContainer} mb-10`}>
        <Tab value="bun" active={current === "bun"} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab value="main" active={current === "main"} onClick={onTabClick}>
          Начинки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={onTabClick}>
          Соусы
        </Tab>
        
      </div>
      <section className={`${styles.ingredientsList} custom-scroll`}>
        {Object.entries(groupedIngredients).map(([key, items]) => {
          return (
            <section ref={refsMap[key]} key={key}>

              <p className="text text_type_main-medium">{typesTitleMap[key]}</p>
              <div className={styles.grid}>
                {items.map((item) => (
                  
                  <Ingredient data={item} key={item._id} />

                ))}
              </div>
            </section>
          );
        })}
      </section>
    </section>
  );
}




BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(IngredientType).isRequired,
};

export default BurgerIngredients;