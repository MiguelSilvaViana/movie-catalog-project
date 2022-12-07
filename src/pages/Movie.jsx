import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'


import MovieCard from '../components/MovieCard'

import '../styles/Movie.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const formatCurrency = (num) => {
    return num.toLocaleString("en-us", {style: "currency",  currency: "USD",})
}

const Movie = () => {
    const {id} = useParams() // get all url
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data) // getFilm
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])

    return (
        <div className="movie-page">
            {movie && 
            <>
            <MovieCard movie={movie} showLink={false}/>
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
                <h3>
                    <BsWallet2/> Budget:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsGraphUp/> Revenue:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsHourglassSplit/> Duration:
                </h3>
                <p>{movie.runtime} Minutes</p>
            </div>
            <div className="info description">
                <h3>
                    <BsFillFileEarmarkTextFill/> Overview:
                </h3>
                <p>{movie.overview}</p>
            </div>
            </>}
        </div>
    )
}


export default Movie;