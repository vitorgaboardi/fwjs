import React, { Component } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class Pokemon extends Component {
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        types: [],
        description: '',
        stats: {
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            specialAttack: '',
            specialDefense: '',
        },
    };

    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params;

        // URLs
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

        // Request 1
        const pokemonRes = await axios.get(pokemonUrl);

        // Variables
        const name = pokemonRes.data.name;
        const imageUrl = pokemonRes.data.sprites.front_shiny;
        
        let [hp, attack, defense, speed, specialAttack, specialDefense] = '';

        pokemonRes.data.stats.map(stat => {
            switch(stat.stat.name){
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];
                    break;
                case 'defense':
                    defense = stat['base_stat'];
                    break;
                case 'speed':
                    speed = stat['base_stat'];
                    break;
                case 'special-attack':
                    specialAttack = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                    break;
            }
        })
        
        const types = pokemonRes.data.types.map(type => type.type.name);


        // Request 2
        const pokemonSpeciesRes = await axios.get(pokemonSpeciesUrl);

        // Gets the first description (usually in English)
        const description = pokemonSpeciesRes.data.flavor_text_entries[0].flavor_text;
        
        // Update variables
        this.setState({
            pokemonIndex,
            name, 
            imageUrl, 
            stats: {hp, attack, defense, speed, specialAttack, specialDefense}, 
            types, 
            description
        });


    }
  
    render() {
        return (
                <div className='col'>
                    <div className='card'>

                        <div className='card-header'>
                            <div className='row'>
                                <div className='col-5'>
                                    <h5>{this.state.pokemonIndex}</h5>
                                </div>
                                <div className='col-7'>
                                    <div className='float-end'>
                                        {this.state.types.map(type => (
                                            <span className='badge bg-primary bg-pill m-1'> {type} </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-body'>
                            <div className='row align-items-center'>
                                <div className='col-md-3'>
                                    <img src={this.state.imageUrl}
                                        className='card-img-top rounded mx-auto mt-2'></img>
                                </div>
                                <div className="col-md-9">
                                    <h4 className="mx-auto">
                                    {this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}
                                    </h4>

                                    <div className="row align-items-center">
                                    <div className={`col-12 col-md-3`}>
                                        HP
                                    </div>
                                    <div className={`col-12 col-md-9`}>
                                        <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.state.stats.hp}%`
                                            }}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{this.state.stats.hp}</small>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row align-items-center">
                                    <div className={`col-12 col-md-3`}>
                                        Attack
                                    </div>
                                    <div className={`col-12 col-md-9`}>
                                        <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                            width: `${this.state.stats.attack}%`
                                            }}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{this.state.stats.attack}</small>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row align-items-center">
                                    <div className={`col-12 col-md-3`}>
                                        Defense
                                    </div>
                                    <div className={`col-12 col-md-9`}>
                                        <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.state.stats.defense}%`
                                            }}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{this.state.stats.defense}</small>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row align-items-center">
                                    <div className={`col-12 col-md-3`}>
                                        Speed
                                    </div>
                                    <div className={`col-12 col-md-9`}>
                                        <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                            width: `${this.state.stats.speed}%`
                                            }}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{this.state.stats.speed}</small>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row align-items-center">
                                    <div className={`col-12 col-md-3`}>
                                        Sp Atk
                                    </div>
                                    <div className={`col-12 col-md-9`}>
                                        <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.state.stats.specialAttack}%`
                                            }}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{this.state.stats.specialAttack}</small>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row align-items-center">
                                    <div className={`col-12 col-md-3`}>
                                        Sp Def
                                    </div>
                                    <div className={`col-12 col-md-9`}>
                                        <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.state.stats.specialDefense}%`
                                            }}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{this.state.stats.specialDefense}</small>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                </div>

                                

                            </div> 
                            <div className="row mt-1">
                                <div className="col">
                                    <p className="">{this.state.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
  }
}

export default withRouter(Pokemon);