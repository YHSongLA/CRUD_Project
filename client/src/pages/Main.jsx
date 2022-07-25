import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import PetList from '../components/PetList'

const Main = () => {
    const [pets, setPets] =useState([])

    // STATE REFRESH
    const [submitted, setSubmitted] = useState(false)

    // CONST REFRESH EMPTY ARROW FUNCTION
    const refresh = () => {
        setSubmitted(!submitted)
    }

    // USE EFFECT AXIOS
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then(res => {
            console.log(res.data)
            setPets(res.data.sort((petA, petB) => petA.petType.toLowerCase().localeCompare(petB.petType.toLowerCase())))
        })
        .catch(error => console.log(error))
    }, [submitted])


  return (
    <div>
        <PetList pets={pets} refresh={refresh} />
    </div>
  )
}

export default Main