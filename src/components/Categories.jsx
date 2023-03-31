import CategoriesCard from "./CategoriesCard";
import styles from "./styles/Categories.module.css";
import pizza from "../assets/pizza.png";
import sushi from "../assets/sushi.png";
import burger from "../assets/burger.png";
import watermelon from "../assets/watermelon.png";
import noodles from "../assets/noodles.png";
import cake from "../assets/cake.png";


const Categories = () => {
    const favMenus = [
        {
            id: 1,
            menuItemImg: pizza,
            notification: 42,
            name: "Pizza",
            price: "Desde $60"

        }, {
            id: 2,
            menuItemImg: sushi,
            notification: 35,
            name: "Sushi",
            price: "Desde $50"

        }, {
            id: 3,
            menuItemImg: burger,
            notification: 28,
            name: "Hamburguesas",
            price: "Desde $50"

        }, {
            id: 4,
            menuItemImg: watermelon,
            notification: 23,
            name: "Veggie",
            price: "Desde $50"


        }, {
            id: 5,
            menuItemImg: noodles,
            notification: 15,
            name: "sopas",
            price: "Desde $50"

        }, {
            id: 6,
            menuItemImg: cake,
            notification: 9,
            name: "Postres",
            price: "Desde $50"
        }
    ]

    return (
        <>
            <div className={styles.categoriesHeadContainer}>
                <h2 className={styles.categoriesHead}>Categorías</h2>
                <h1 className={styles.categoriesFavHead}>Las favoritas</h1>
            </div>
            <div className={styles.categoriesTemplateContainer}>
                {
                    favMenus.map((fav) => {
                        const { id, menuItemImg, name, price, notification } = fav
                        return (
                            <CategoriesCard key={id} menuItemImg={menuItemImg} name={name} price={price} notification={notification} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Categories;