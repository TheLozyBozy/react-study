import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
     /* If you wanna pass string use "" if number use {} */

    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        //1- Take a copy of the exisiting state

        const fishes = { ...this.state.fishes };

        //2- Add our new fish to that fishes  
        fishes[`fish${Date.now()}`] = fish ; 

        //3- set the new fishes to state

        this.setState({
            fishes: fishes 
        });
         /* 
            You should make a copy because react not allow you to edit state 
            after you make the copy use this method to edit it 
         */

    }

    loadSampleFish = event => {
        this.setState({
            fishes: sampleFishes 
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="catch-of-the-day">
                    <div className="menu">
                         <Header tagline="Catch-of-the-day" age={500} checked={true}/>
                    </div>
                    <Order/>
                    <Inventory addFish = {this.addFish} loadSampleFish={this.loadSampleFish}/>
                </div>
            </React.Fragment>
        )
    }
}

export default App;