import React, { Component } from 'react';
import SuperheroService from '../services/SuperheroService';

class SuperheroDetail extends Component {
    constructor() {
        super();

        this.state = {
            id: '',
            hero: {},
        }
    }

    async componentDidMount() {
        const { match: { params } } = this.props;

        await SuperheroService
            .getById(params.id)
            .then(response => {
                this.setState({
                    hero: response.data[0]
                })
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="detail">
                <h3>#{this.state.hero.id} {this.state.hero.name}</h3>
                <p>{this.state.hero.alias}</p>
            </div>
        );
    }
}

export default SuperheroDetail;