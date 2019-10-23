import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
class App extends React.Component {
     /* If you wanna pass string use "" if number use {} */
    render() {
        return (
            <React.Fragment>
                <div className="catch-of-the-day">
                    <div className="menu">
                         <Header tagline="Catch-of-the-day" age={500} checked={true}/>
                    </div>
                    <Inventory/>
                    <Order/>
                </div>
            </React.Fragment>
        )
    }
}

export default App;