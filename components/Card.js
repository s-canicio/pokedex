import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    cardImage: {
        width: 96,
        height: 96,
        backgroundColor: '#F2F2F2'
    },
});

class Card extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        img: '',
        id: null,
        types: []
    }

    componentDidMount(){
      fetch(this.props.pkmnUrl)
      .then((response) => response.json())
      .then((pkmnDatas) => {
        this.setState({ 
            img: pkmnDatas.sprites.front_default,
            id: pkmnDatas.id,
            types: pkmnDatas.types
        })
      })
    }

    render(){
        const pkmnName = this.props.pkmnName;
        const {img, id, types} = this.state;
        // const {pkmnNumber, pkmnName, pkmnImg} = this.props;
        // const pokemonName = "Pokemon name"
        // const pokemonNumber = "Pokemon number"
        
        return(
            <View>
                <Image
                style={styles.cardImage}
                source={{uri: img}}></Image>
                <Text>{id}</Text>
                <Text>{pkmnName}</Text>

            </View>
        )
    }
}

export default Card