import React from 'react';

class AddFishForm extends React.Component {

    nameRef    = React.createRef();
    priceRef  = React.createRef();
    statusRef  = React.createRef();
    descRef = React.createRef();
    imageRef  = React.createRef();

    createFish = event => {
        //1- Stop the form submitting
        event.preventDefault();

        const fish = {
            nameRef : this.nameRef.current.value , 
            priceRef : parseFloat(this.priceRef.current.value),
            statusRef : this.statusRef.current.value,
            descRef  : this.descRef.current.value,
            imageRef : this.imageRef.current.value
        };

        this.props.addFish(fish);

        // refresh he form 
        event.currentTarget.reset(); 
    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>

                <input type ="text"  ref={this.nameRef} placeholder="name"    name = "name"   />
                <input type ="text"  ref={this.priceRef} placeholder="price" name = "price"/>
                <select name = "status" ref={this.statusRef} >
                    <option value="available">Fresh!!</option>
                    <option value="unavailable">Sold Out!!</option>
                </select>
                <textarea  ref={this.descRef} placeholder="Desc" name="desc"/>
                <input type ="text"  ref={this.imageRef} placeholder="Image" name = "image"/>
                <button type ="submit" > + Add Fish</button>


            </form>
        )
    }

}

export default AddFishForm;