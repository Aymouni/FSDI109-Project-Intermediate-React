import "./Catalog.css";
import Product from "../components/Product";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog(){
    const [products, setProdcuts] = useState([]);
    const [categories, setCategories] = useState([]); // To hold the categories data
    const [productsToDisplay, setProdcutsToDisplay] = useState([]);

    function loadCatalog(){
        let service = new DataService();
        let data = service.getProducts();
        setProdcutsToDisplay(data); //initially display all products
        let cats = ["Fruit", "Berry"] // Create a placeholder for the categories
        setCategories(cats);
    }

    // Filter logic
    function filter(category){
        let list = [];
        // Find the product that matches the category
        for(let i=0; i < products.length; i++)
        {
            let prod = products[i];
            if(prod.category === category)
            {
                list.push(prod);
            }
        }
        setProdcutsToDisplay(list);
    }

    // Reset function - shows all products
    function reset(){
        setProdcutsToDisplay(products); // Reset back to the full products list
    }

    useEffect(()=>
        {
            // load your data
            let service = new DataService();
            let data = service.getProducts();
            setProdcuts(data);
            loadCatalog();
    },[]); // the empty array [] means this effect runs only ONCE

    return(
        <div className="catalog">
            <h2 className="text-center mb-3">Check our amazing products</h2>

            {/* Filter buttons */}
            <div className="d-flex justify-content-center gap-2 mb-4">
                <button className="btn btn-dark" onClick={reset}>All</button>
                {categories.map(cat => (
                    <button key={cat} className="btn btn-outline-success" onClick={() => filter(cat)}>{cat}</button>
                ))}
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-4">
                {productsToDisplay.map(prod => (
                    <div style={{ width: "18rem", height: "420px" }} key={prod._id}>
                        <Product data={prod}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catalog;
