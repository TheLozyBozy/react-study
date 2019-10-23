import React from 'react';
/*  
    you destructing  the probs when you using { }
    or you can use props only 
*/
const Header = ({tagline , age , checked}) =>  (
    <header className="top">
        <h1>Carch 
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
            </span> Day</h1> 
        <h3 className="tagline">
            <span>{tagline + age + checked} </span>
        </h3>
    </header>
)

export default Header;