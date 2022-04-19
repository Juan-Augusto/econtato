import { Link } from "react-router-dom"
import states from "./StatesObjects"
import './StatesStyles.css'


export const States = () => {
    return(
        <div>
            <ul className="state--section">
            <h3>ONDE:</h3>
            {states.map((state, index) => {
                return(
                    <Link to={state.path} className="states--link">
                        <li key={index} className="state--item">
                            <h4>{state.stateAbbreviation.toUpperCase()}</h4>
                        </li>
                    </Link>
                )
            })}
            </ul>    
        </div>
    )
}