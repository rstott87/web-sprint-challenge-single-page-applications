import axios from 'axios';
import * as yup from 'yup';
import { useState, useEffect } from 'react'


const formSchema = yup.object().shape({
    name: yup.string()
        .required('name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup.string().required('name is required').min(2, 'Name is too short'),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    pineapple: yup.boolean(),
    vegetable: yup.boolean(),
    instructions: yup.string()
});


export default function Form (props) {
    
    const [post, setPost] = useState([]);
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        pepperoni: true,
        bacon: true,
        pineapple: true ,
        vegetable: true,
        instructions: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        size: "",
        pepperoni: "",
        bacon: "",
        pineapple: "",
        vegetable: "",
        instructions: "",
    });
    const [disabled, setDisabled] = useState(true)

    const setFormErrors = (name, value) => {
        yup.reach(formSchema, name).validate(value)
          .then(() => setErrors({...errors, [name]: ''}))
          .catch(err => setErrors({...errors, [name]: err.errors[0]}))    
    }
    const change = event => {
        const { checked, type, name, value } = event.target;
        const valueToUse = type==='checkbox' ? checked : value;
        setFormErrors(name, valueToUse);
        setFormState({...formState, [name]: valueToUse })
      }

      useEffect(()=>{
        formSchema.isValid(formState).then(valid=> setDisabled(!valid))
      }, [formState])  

      const submit = event => {
          event.preventDefault()
          const order = { Customer: formState.name.trim(), 
            size: formState.size,
            pepperoni: formState.pepperoni,
            bacon: formState.bacon,
            pineapple: formState.pineapple ,
            vegetable: formState.vegetable,
            instructions: formState.instructions.trim(),
            }

            console.log(order)

            axios.post('https://reqres.in/api/orders', order)
            .then(res=>{
                setPost(res.data);
                console.log("succes", res.data)
            })
            .catch(err => {
                console.log(err)
            })
      }
    return (
    <>
        <h3>Pizza Form</h3>
        <form onSubmit={submit} id = "pizza-form">
            <label>
                <div>{errors.name}</div>
                Name:
                <input name= "name" onChange={change} 
                type="text"
                value={formState.name} 
                id="name-input">
                </input>
            </label> <br/>
            <label>
                Size:
                <select name= "size" onChange={change} id="size-dropdown" value={formState.size}>
                    <option value= "small">Small</option>
                    <option value= "medium">Medium</option>
                    <option value= "large">Large</option>
                </select>   
            </label><br/>
            <label> Pepperoni:
                <input name= "pepperoni" 
                
                type="checkbox">
                </input>
            </label><br/>
            <label> 
                Bacon:
                <input name= "bacon" 
               
                type="checkbox">
                </input>
            </label>
            <label> 
                Pineapple:
                <input name= "pineapple" 
                
                type="checkbox">
                </input>
            </label>
            <label> 
            Vegetable:
                <input name= "vegetable" 
                
                type="checkbox">    
                </input>
            </label><br/>
            <label>
                Special Instructions:
                <input name = "instructions" 
                type="text" 
                id="special-text" 
                onChange={change} 
                value={formState.instructions}>
                </input>
            </label> 
            <button disabled={disabled} id="order-button">
                Place Order
            </button>
        </form>
    </>
    )}
