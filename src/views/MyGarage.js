
import React from 'react';
import GenericSection from '../components/sections/GenericSection';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { GarageRounded } from '@mui/icons-material';



const { Component } = React


class MyGarage extends Component {
    constructor(props){
      super(props);
      this.state = {
        dynamicList: []
      };
      this.addListItem = this.addListItem.bind(this);
      this.removeListItem = this.removeListItem.bind(this);
    }

    //adds an item to the dynamic list, given list is less than 2 items
    addListItem(itemToAdd){
      let currentList = this.state.dynamicList;
      if (currentList.length < 2) {
        currentList.push(itemToAdd);
        this.setState({dynamicList : currentList});
      }
      
    }
    removeListItem(itemToRemove){
      let currentList = this.state.dynamicList;
      currentList.splice(itemToRemove, 1);
      this.setState({dynamicList : currentList});
    }
    render(){
      return(
        <GenericSection>
        <div id="MyGarage"  class="component-wrapper">    
        <h1 class = 'text-color-primary'>My Garage <GarageRounded/> </h1>    
          <DynamicList listItems={this.state.dynamicList} removeItem={this.removeListItem} />
          <InputBox addItem={this.addListItem} />
        </div>  
        </GenericSection>      
      );
    }
  }
  
  class DynamicList extends React.Component {
    render(){
      return (
        <ul>
          {
            Object.keys(this.props.listItems).map( (index) => {
              return (
                <li  name={index}>  <DirectionsCarIcon/>    {this.props.listItems[index]} <DeleteSharpIcon onClick={ () => this.props.removeItem(index) }/>    </li>                
              );
            })
          }
        </ul>
      );
    }
  }
  
  class InputBox extends React.Component {
    formSubmit(e){
      e.preventDefault();    
      let itemToAdd = this.refs.item.value;
      if(itemToAdd !== ''){
        this.props.addItem(itemToAdd);
        this.refs.item.value = '';
      }
    }
    render(){
      return (
        <GenericSection>
          
        <form id="MyGarage"  ref="itemForm" onSubmit={e => this.formSubmit(e)}>
          <p>Add your car to the dynamic list</p>
          <input type="text" id="item" ref="item"/><br />
          <button type="submit" class="btn btn-primary">Add Item</button>
        </form>
        </GenericSection>
      );
    }
  }
  
  export default MyGarage;

