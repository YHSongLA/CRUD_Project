import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Typekit from 'typekit';

const PetDetail = () => {
    // STATE
    const [pet, setPet] = useState({})
    // const [likes, setLikes] = useState(0)
    
    const {pet_id} = useParams()

    // STATE REFRESH
    const [submitted, setSubmitted] = useState(false)


    // CONST REFRESH EMPTY ARROW FUNCTION
    const refresh = () => {
        setSubmitted(!submitted)
    }

    // USE EFFECT AXIOS
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + pet_id)
            .then(res => {
                console.log(res.data)
                setPet(res.data)
            })
            .catch(error => console.log(error))
    }, [submitted, pet_id])

    // DELETE FUNCTION
    const destroyPet = (pet_id) => {
        console.log(pet_id)
        axios.delete("http://localhost:8000/api/pets/" + pet_id)
            .then(res => refresh())
            .catch(error => console.log(error))
    }

    // UPDATE LIKES
    const incrementLikes = () => {
        axios.put("http://localhost:8000/api/pets/likes/" + pet_id, pet)
            .then(res => {
                console.log(res.data)
                refresh()
            })
            .catch(error => console.log(error))
    }

  return (
    <div className='p-5'>
        <h1>Pet Shelter</h1>
        <Link to={"/"} type='submit' className='btn btn-outline-warning me-2 float-end'>Home</Link>
        <h4>Details about {pet.name}</h4>
        <Link to={"/"} onClick={() => destroyPet(pet._id)} type="submit" className='btn btn-outline-danger float-end'>Adopt {pet.name}</Link>
        <div className="card w-100 container">
            <div className="card-body">
                <h5 className="card-title">Pet Type: {pet.petType}</h5>
                <h6 className="card-subtitle mb-2">Pet Description: {pet.description}</h6>
                <p className="card-text">
                    Skills: {pet.skill1}, {pet.skill2}, {pet.skill3}
                </p>
                <button onClick={incrementLikes} className='btn btn-outline-success'>Like {pet.name}</button>
                <p>Likes: {pet.likes}</p>
            </div>
        </div>
    </div>
  )
}

export default PetDetail