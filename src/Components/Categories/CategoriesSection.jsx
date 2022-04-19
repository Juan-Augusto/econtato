import categories from "./Objects"
import './CategoriesSectionStyle.css'
import { Link } from "react-router-dom"
import {States} from "../States/States"
export const CategoriesSection = () => {
    return(
        <div>
            <ul className="categories--section">
            {categories.map((category, index) => {
                return(
                    <Link to={category.path} style={{textDecoration: 'none'}}>
                        <li className="category" key={index}>
                            <i className={category.icon}></i>
                            <h4>{category.name.toUpperCase()}</h4>
                        </li>
                    </Link>
                )
            })}
            </ul>
            <States />
        </div>
    )
}

