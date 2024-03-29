import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from "./Fish";
import base from "../base";
class App extends React.Component {
     /* If you wanna pass string use "" if number use {} */

    state = {
        fishes: {},
        order: {}
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId , JSON.stringify(this.state.order))
    }

    componentDidMount() {
        const {params} = this.props.match;
        const  localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef)
            this.setState({order : JSON.parse(localStorageRef)});
        this.ref = base.syncState(`${params.storeId}/fishes` , {context: this , state:"fishes"});
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

    addToOrder = (key) => {
        // 1- take a copy of staut
        const order = { ...this.state.order };

        // 2- Ehier add or update the number in out order
        
        /* 

            1 - first click is equal undefined and will choose the number one 

            2 - second click in the same item, we will lock if it is not undefined then we will plus it to +1 

            3 - after the click is happend the order[key] will eqaul 2 

        
        */
        order[key] = order[key] + 1 || 1

        // 3- call setState to update order state

        this.setState({ order });
    }

    removeOrder = (key) => {
        // 1- take a copy of staut
        const order = { ...this.state.order };

        // 2- Ehier add or update the number in out order
        delete order[key];

        // 3- call setState to update order state

        this.setState({ order });
    }

    loadSampleFish = () => {
        this.setState({
            fishes: sampleFishes 
        });
    }

    updateFish = (key , updatedFish) => {
        // 1 - take a copy from state 
        const fishes = {...this.state.fishes};

        // 2 - update the fish
        fishes[key] = updatedFish;

         // 3 - set the state
         this.setState({ fishes });
    }

    deleteFish = (key) => {
        // 1 -  copy fishes state 
        const fishes = {...this.state.fishes};

        // 2 - update the state 
        fishes[key] = null;

         // 3 - set the state
         this.setState({ fishes });

    }
    render() {
        return (
            <React.Fragment>
                <div className="catch-of-the-day">
                    <div className="menu">
                         <Header tagline="Catch-of-the-day" age={500} checked={true}/>
                         <ul className="fishes">
                             {
                                 Object.keys(this.state.fishes).map(key=> <Fish key={key} index={key} details={this.state.fishes[key]}
                                 addToOrder={this.addToOrder}
                                 />)
                             }
                         </ul>
                    </div>
                    <Order fish={this.state.fishes} order={this.state.order} removeOrder = {this.removeOrder}/>
                    <Inventory addFish = {this.addFish} loadSampleFish={this.loadSampleFish}
                    fishes= {this.state.fishes} updateFish = {this.updateFish}
                    deleteFish = {this.deleteFish}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default App; 