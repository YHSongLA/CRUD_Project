import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const PetList = (props) => {
    // DESTRUCTURE
    const {pets} = props

  return (
    <div className='container bg-secondary text-warning'>
        <h1>Pet Shelter</h1>
        <Link to={"/pets/new"}>add a pet</Link>
        <table className='border p-3 m-auto mt-5'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Type</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    pets.map((pet) => {
                        return (
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.petType}</td>
                                <td>
                                    <Link to={"/pets/"+pet._id}>Details </Link> |
                                    <Link to={"/pets/edit/"+pet._id}> Edit</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default PetList