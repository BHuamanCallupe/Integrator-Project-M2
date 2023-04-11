import React, { useState } from 'react'
import { validate_form } from "../hooks/useValidateForm"

export const Form = ({ login }) => {

    const [userData, setuserData] = useState({
        email: "",
        password: ""
    })
    const [errors, seterrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setuserData({ ...userData, [name]: value });
        validate_form({ ...userData, [name]: value }, errors, seterrors, event.target);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' value={userData.email} onChange={handleChange} />
                    <span>{errors.email}</span>
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' value={userData.password} onChange={handleChange} />
                    <span>{errors.password}</span>
                </div>
                <button type='submit' onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}
