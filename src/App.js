import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

class App extends React.Component{
  state = {
    items:[],
    currentItem:{
      text:'',
      key:''
    }
  }
  handelInput = (e) =>{
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem = (e) =>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    // console.log(newItem);
    if(newItem.text !== ""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem = (key) => {
    const filterItem = this.state.items.filter(item => item.key !== key);
    this.setState({
      items:filterItem
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text"
            value={this.state.currentItem.text}
            onChange={this.handelInput} />
            {/* <button type="submit">Add</button> */}
          </form>
        </header>
        <ListItem items = {this.state.items} deleteItem={this.deleteItem}></ListItem>
      </div>
    );
  }
}

export default App;
