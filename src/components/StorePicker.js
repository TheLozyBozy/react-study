import React  from 'react'; 

class StorePicker extends React.Component {
    render() {
        return(
           // This to allow us to make a multi element in the same level 
           <React.Fragment> 
               {
                   console.log("sad") /* Dont add a comment like this // 
                   or add a comment in empty like this 
                   {/* this is a comment }*/
                }
               <form action="" className="store-selector">
                    <input type="text" required placeholder="Store Name" />
                    <button type="submit">Visit Store</button>
                </form> 
           </React.Fragment> 
        ); 
    }
}

export default StorePicker;