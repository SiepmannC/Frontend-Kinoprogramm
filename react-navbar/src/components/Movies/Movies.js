import React, { Component } from 'react';
import './Movies.css'
import MovieRow from "./MovieRow";
import $ from'jquery'



class Movies extends Component {

        /* constructor(props){
            super(props);
            this.state = {};
            /* console.log("Initializer") */

            /* const Movies = [
                {id: 0, poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9mvgmX2b05SERQWC1IAGIdkfd8n.jpg", title: "Avengers: Infinity War", overview: " As the Avengers and their enemys have continued to fight for the earth ..."},
                {id: 1, poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jMrtq1X4JT8iPYbc18k0XmydnqI.jpg",title: "The Avengers", overview: " This is the second overwiev"}
            ]

            
        
            var movieRows = [];



        Movies.forEach((movie) => { 
            console.log(movie.title)
            const movieRow = <MovieRow movie={movie}/>
           
                
            movieRows.push(movieRow);
        });

        this.state = {rows: movieRows} 

        this.performSearch()
    }

    performSearch(){
        console.log("Perform search using MovieDB")
        

        var unirest = require("unirest");

        var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/auto-complete");
        
        req.query({
            "q": "Marvel"
        });
        
        req.headers({
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "useQueryString": true
        });
        
        
        req.end(function (res) {
            if (res.error) throw new Error(res.error);
        
            console.log(res.body);
        });




        $.ajax({
            String
        })
    } */

    render(){

        return(
            <div>
                <input className = "SearchBar" placeholder="Enter search term"/>
                
                {/* {this.state.rows} */}
               
            	


            </div>
        )
    }

}

export default Movies