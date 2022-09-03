import React, { useEffect } from 'react'
import "./Signup.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
    const [user, setuser] = useState({
        name: "", email: "", phone: '', password: ''
    });

    let name, value;

    const handleuser = (e) => {

        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setuser({ ...user, [name]: value })

    }
    console.log(user)

    const navigate = useNavigate()

    async function handlesubmit(e) {
        e.preventDefault()
        try {

            if (user.name != "" && user.email != "" && user.phone != "" && user.password != "") {
                await axios.post("http://localhost:5000/posts", user)
                console.log(user)
                navigate("/login")
            } else {
                alert("all fileds are required")
            }

        } catch (error) {
            console.log("something went wrong")
        }

    }

    return (

        <div id='main'>

            <div className='sign'>
                <h2>Signup</h2>
            </div>

            <div className='form'>
                
                <input type="text" className='input_filed' placeholder='Enter Name' value={user.name} name='name' onChange={handleuser}></input><br></br>

                <input type="text" className='input_filed' placeholder='Enter Email' value={user.email} name='email' onChange={handleuser} ></input><br></br>

                <input type="number" className='input_filed' placeholder='Enter Number' value={user.phone} name='phone' onChange={handleuser} ></input><br></br>

                <input type="number" className='input_filed' placeholder='Enter Password' value={user.password} name='password' onChange={handleuser} ></input><br></br>

                <button type='submit' className='btn-primary' onClick={handlesubmit}>Signup</button><br></br>

                <a href='/login'>Alredy have an Account</a>


            </div>


        </div>
    )
}
