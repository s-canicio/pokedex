import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import Card from './Card'


class List extends Component {
    state = {
        pokemons: []
    }

    componentDidMount(){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((pkmnList) => {
        this.setState({ pokemons: pkmnList.results })
        
      })
    }

    render(){
        return(
            <ScrollView>
                {this.state.pokemons.map(pkmn => 
                    <Card key={pkmn.name} pkmnName={pkmn.name} pkmnUrl={pkmn.url}> </Card>
                )}
            </ScrollView>
        )
    }
}

export default List