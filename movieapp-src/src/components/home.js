import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    const [movieData, setMovieData] = useState([]);

    const [search, setSearch] = useState("");

    function getMovies(pnum = 1){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=133a04678e78f2200c69f0b7be9cd57e&language=en-US&page="+pnum)
        .then(response => response.json())
        .then(data =>{       
        setMovieData(data.results);
        })
    }

    // function searchMovie(){
    //   setMovieData("");
    //   fetch("https://api.themoviedb.org/3/search/movie?api_key=133a04678e78f2200c69f0b7be9cd57e&language=en-US&query="+{search}+"&page=1&include_adult=false")
    //   .then(response => response.json())
    //   .then(data =>{
    //     setMovieData(data);           
    //     getMovies();    
    //   })
    // }


    useEffect(()=>{
        getMovies();
    },[])

    return(
<div className='container'>
      <div className='row'>
        <div className='col-lg-12 mt-3'>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search movies" onChange={obj=>setSearch(obj.target.value)} />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className='fa fa-search text-white'></i>
            </button>
          </div>
        </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 mt-3 mb-3'>
          <h3>Trending</h3>
        </div>
      </div>
      <div className='row gy-3 mb-3'>
        {
          movieData.filter(post => {
            if((post.title.toLowerCase().includes(search.toLowerCase()))){
              return post;
            }
          }).map((mdata, index)=>{
            var imgurl = "https://image.tmdb.org/t/p/w500/" + mdata.backdrop_path;
            return(                 
                    <div className='col-lg-3 col-md-4 col-sm-6 grow'>
                    <Link to={`/individualmovie/${mdata.id}`} className='text-decoration-none'>
                    <div className='card h-100' key={index}>
                        <img className="card-img-top w-100 img-fluid" src={imgurl} height="100px"  alt={mdata.original_title} />
                        <div className="card-body card-bg">
                        <p className="text-dark card-text"><strong>{mdata.title}</strong></p>
                        <p className="text-dark card-text"><strong><i className='fa fa-star text-warning'></i> {(mdata.vote_average/2).toFixed(1)} / 5 </strong></p>
                        </div>
                    </div>
                    </Link>
                    </div>                
            )
          })
        }
      </div>
    </div>
    )
}

export default Home;


// https://image.tmdb.org/t/p/w500/p1F51Lvj3sMopG948F5HsBbl43C.jpg

{/* <h1>Movie App</h1>
      <div className="card">
      <img className="card-img-top w-25" src="" alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">{movieData.title}</p>
        <p className="card-text">{movieData.vote_average} / 10</p>
  </div>
</div> */}