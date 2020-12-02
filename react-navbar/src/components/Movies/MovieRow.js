import React, { Component } from 'react';
import './Movies.css'

class MovieRow extends Component {

    render() {
        return <table key={this.props.movie.id}>
        <tbody>
        <tr>
            <td>
                <img alt="poster" className = "MovieBanner" src={this.props.movie.poster_src}/>

            </td>
            <td>
                {/*Eingabe der anzuzeigenden Parameter*/}
                {this.props.movie.title}
                <p>{this.props.movie.overview}</p>
            </td>
        </tr>
    </tbody>
</table>

        }

    }

export default MovieRow