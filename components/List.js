import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Card from './Card'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }
});

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
            <View style={styles.container}>
                {this.state.pokemons.map(pkmn => 
                    <Card key={pkmn.name} pkmnName={pkmn.name} pkmnUrl={pkmn.url} />
                )}
            </View>
        )
    }
}

export default List