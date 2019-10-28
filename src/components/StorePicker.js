import React  from 'react'; 
import { getFunName } from "../helpers"
class StorePicker extends React.Component {
    
    myInput = React.createRef();
    /* You can chose this answer but if you alot of method you will face an ugly constructor */
    /* Use the arrow function will resolve this problem */
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this)
    // }
    // goToStore(event) {

    //     //1: stop submitting 
    //     event.preventDefault();

    //     //2: get the text from the input 
    //     console.log(this.myInput)

    //     //3: change the path 
    // }


    goToStore = event => {
        //1: stop submitting 
        event.preventDefault();

        //2: get the text from the input 
        let storeName = this.myInput.current.value;


        //3: change the path 
        this.props.history.push(`/store/${storeName}`);

    }
    render() {
        return(
           // This to allow us to make a multi element in the same level 
           <React.Fragment> 
               
               {/* This is for JS CODE */
                   console.log("sad") /* Dont add a comment like this // 
                   or add a comment in empty like this 
                   {/* this is a comment }*/
                   // if we add () after functtion -> after this the function will run auto 
                }
               <form action="" className="store-selector" onSubmit={this.goToStore}>
                   <h2>Please Enter A Store</h2>
                    <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                    <button type="submit">Visit Store</button> 
                </form> 
           </React.Fragment> 
        ); 
    }
}

export default StorePicker;