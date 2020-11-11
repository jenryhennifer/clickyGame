import React, {Component} from 'react';
import characterCard from './components/characterCard';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron/jumbotron';
import characters from './characters.json'


class App extends Component{
    state = {
        characters: characters
    };

    render(){
        return(
            <Wrapper>
                <Navbar />
                <Jumbotron />
                {this.state.characters.map(character =>(
                <characterCard
                    id={character.id}
                    image={character.image}
                    clicked={character.clicked}
                />
                ))}


            </Wrapper>
        )
    }
}

export default App