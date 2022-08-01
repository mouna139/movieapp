import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const IndividualMovie = () =>{
    const {mid} = useParams();
    const navigate = useNavigate();
     
    const [movie, setMovie] = useState({});
    const [poster, setPoster] = useState("");

    const getIndividualMovie = async () =>{
        const url = "https://api.themoviedb.org/3/movie/"+mid+"?api_key=133a04678e78f2200c69f0b7be9cd57e&language=en-US";       
        const response = await fetch(url);
        const data = await response.json();
            setMovie(data);
            setPoster("https://image.tmdb.org/t/p/w500" + data.poster_path);
    }

    const goBack = () =>{
        navigate("/");
    }

    useEffect(()=>{
        getIndividualMovie();
    },[]);

    return(
       <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div id="centers" >
                        <div className="mt-5 p-3">
                            <button className="btn" onClick={goBack}><i className="fa fa-arrow-left"></i></button>
                        </div>
                        <div className=" mt-2 p-3">
                            <h1>{movie.title}</h1>
                        </div>
                        <div className=" mt-2 p-3">
                            <h5>Rating : {(movie.vote_average/2).toFixed(2)}/5 </h5>
                        </div>
                        <div className=" mt-2 p-3 lineHeight text-secondary">
                            <p>{movie.overview}</p>
                        </div>
                        <div className="px-3">                                     
                            <h5>Release Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {movie.release_date}</h5>
                        </div>
                        <div className=" p-3 ">
                            <h5>Original Language &nbsp;&nbsp;&nbsp;&nbsp; {movie.original_language}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">                      
                    <img src={poster} className="img-fluid bg-cover height" alt="Movie" />                        
                </div>
            </div>
       </div>
    )
}

export default IndividualMovie;

// https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg
// className="d-flex border border-danger flex-column"