import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SuperheroService from '../services/SuperheroService';

class Superhero extends Component {
    constructor() {
        super();

        this.state = {
            heroes: []
        }
    }

    async componentDidMount() {
        await SuperheroService
            .get()
            .then(response => {
                this.setState({
                    heroes: response.data.heroes
                })
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.heroes.map((hero) => {
                        return (
                            <li key={hero.id}>
                                <Link to={`/superhero/${hero.id}`}>
                                    <strong>{hero.name}</strong>
                                    <small>{hero.alias}</small>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Superhero;