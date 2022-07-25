import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"

const PetForm = () => {
    // STATE
    const [name, setName] = useState()
    const [petType, setPetType] = useState()
    const [description, setDescription] = useState()
    const [skill1, setSkill1] = useState()
    const [skill2, setSkill2] = useState()
    const [skill3, setSkill3] = useState()

    const [errors, setErrors] = useState([]);

    // USE NAVIGATE
    const navigate = useNavigate()

    const createPet = (e) => {
        e.preventDefault()
        const petObj = {
            name,
            petType,
            description,
            skill1,
            skill2,
            skill3
        }
        // AXIOS POST ROUTE
        axios.post("http://localhost:8000/api/pets/new", petObj)
            .then(res => {
                console.log("Successfully Created a Pet", res)
                navigate("/")
                setErrors([])
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                console.log(errorResponse)
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
            setErrors(errorArr)
            })
    }

  return (
    <div className='bg-secondary w-100'>
        <div className='container p-5'>
        <h1>Add Pet</h1>
        <Link to={"/"} type='submit' className='btn btn-outline-warning me-2 float-end'>Home</Link>
		{errors.map((err, index) => <p key={index}>{err}</p>)}
		<form onSubmit={createPet} className="d-flex justify-content-between align-items-center">
            <div className="left">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Pet Name:</label>
                    <input onChange={(e) => setName(e.target.value)} name="name" type="text" className="form-control"/>
                    
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Pet Type:</label>
                    <input onChange={(e) => setPetType(e.target.value)} name='petType' type="text" className="form-control"/>
                    
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description:</label>
                    <input onChange={(e) => setDescription(e.target.value)} name='description' type="text" className="form-control"/>
                </div>
            </div>
            <div className="right">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Skill 1:</label>
                    <input onChange={(e) => setSkill1(e.target.value)} name="skill1" type="text" className="form-control"/>
                    
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Skill 2:</label>
                    <input onChange={(e) => setSkill2(e.target.value)} name="skill2" type="text" className="form-control"/>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Skill 3:</label>
                    <input onChange={(e) => setSkill3(e.target.value)} name="skill3" type="text" className="form-control"/>
                </div>
			    <button type="submit" className="btn btn-primary text-center">add</button>
            </div>
		</form>
        </div>
    </div>
  )
}

export default PetForm