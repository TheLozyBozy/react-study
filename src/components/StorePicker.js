import React  from 'react'; 
import { getFunName } from "../helpers"
class StorePicker extends React.Component {
    render() {
        return(
           // This to allow us to make a multi element in the same level 
           <React.Fragment> 
               
               {/* This is for JS CODE */
                   console.log("sad") /* Dont add a comment like this // 
                   or add a comment in empty like this 
                   {/* this is a comment }*/
                }
               <form action="" className="store-selector">
                   <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder="Store Name" value={getFunName()}/>
                    <button type="submit">Visit Store</button>
                </form> 
           </React.Fragment> 
        ); 
    }
}

export default StorePicker;