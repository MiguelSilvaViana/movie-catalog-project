import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

import '../styles/NavBar.css'

function Navbar() {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmite = (e) => {
        e.preventDefault()
        if(!search) return
        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/"><BiCameraMovie/> MoviesLib</Link>
            </h2>
            <form onSubmit={handleSubmite}>
                <input type="text" placeholder="find films" value={search} onChange={e => setSearch(e.target.value)}/>
                <button type="submite"> <BiSearchAlt2/> </button>
            </form>
          </nav>
    )
}

export default Navbar
