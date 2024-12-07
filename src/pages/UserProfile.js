import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

function UserProfile() {
    const params = useParams();
    console.log(params)

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/users/${params.id}`)
        .then(r => r.json())
        .then(data => setUser(data))
        .catch(error => console.error(error))
    }, [params.id])

    if(!user.name){
        return <h1>Loading...</h1>
    }

  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <h1>{user.name}</h1>
        </main>  
    </div>
  )
}

export default UserProfile
