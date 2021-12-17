import {axios} from 'axios';
import * as yup from 'yup';
import { useState } from 'react'

const formSchema = yup.object().shape({
    name: yup.string()
        .required('name is required')
        .min(2, 'Name is too short')
});



export default function Form (props) {
    const [errors, setErrors] = useState({

    });
    
    return (
    <>
        <h3>Pizza Form</h3>
        <form id = "pizza-form">
            <label>
                Name:
                <input type="text" id="name-input">
                </input>
            </label> <br/>
            <label>
                Size:
                <select id="size-dropdown">
                    <option value= "small">Small</option>
                    <option value= "medium">Medium</option>
                    <option value= "large">Large</option>
                </select>   
            </label><br/>
            <label> Pepperoni:
                <input name= "pepperoni" type="checkbox"></input>
            </label><br/>
            <label> 
                Bacon:
                <input name= "bacon" type="checkbox"></input>
            </label>
            <label> 
                Pineapple:
                <input name= "pineapple" type="checkbox"></input>
            </label>
            <label> 
            Vegetable:
                <input name= "vegetable" type="checkbox"></input>
            </label><br/>
            <label>
                Special Instructions:
                <input type="text" id="special-text">
                </input>
            </label> 
            <button id="order-button">Place Order</button>
        </form>
    </>
    )
}