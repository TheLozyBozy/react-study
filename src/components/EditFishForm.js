import React from 'react';
 
class EditFishFoem extends React.Component {
    changeHandler = (event) => {
       // update that fish 

       // 1. Take a copy from that fish 

       const updatedFish  = {
           ...this.props.fish,
           [event.currentTarget.name]:event.currentTarget.value
        };
        this.props.updateFish(this.props.index  , updatedFish);
    }
    render() {  
        return (
            <React.Fragment>
                <div className='fish-edit'>
                    <input type='text' name = 'name' defaultValue={this.props.fish.name} onChange={this.changeHandler}/>
                    <input type='text' name = 'price' defaultValue={this.props.fish.price} onChange={this.changeHandler}/>
                    <select name='status' defaultValue={this.props.fish.status} onChange={this.changeHandler}>
                        <option value='available' >Fresh!</option>
                        <option value='unavailable'>Sold Out!</option>
                    </select>
                    <textarea name='desc' defaultValue={this.props.fish.desc} onChange={this.changeHandler}/>
                    <input type='text' name = 'image' defaultValue={this.props.fish.image} onChange={this.changeHandler}/>
                    <button onClick = {()=> this.props.deleteFish(this.props.index)}>Remove Fish</button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default EditFishFoem ;