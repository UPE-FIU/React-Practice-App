import React, { Component } from 'react';

import Header from './components/header';
import Data from './components/data';

import axios from 'axios';

import './style.css'

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
        data:null,
        display: null
    }
  }

  //added function to call here

  async componentDidMount(){
    let {data} = await axios.get('https://swapi.co/api/starships/');
    let {results} = data;
    this.setState({data:results})
    console.log(this.state.data)
    this.loadStarships();
  }

  //add components to an array

loadStarships = () =>{
  let displayarr = [];
  this.state.data.forEach(data => {
      const{name,length,passengers} = data;
      displayarr.push( <Data name={name} length={length} passengers={passengers}/>)
    })

    this.setState({display:displayarr})
  }

  //load array in render instead

  render() {
    if(this.state.display)
    return (
      <div >
        <Header />
        <div className="bodyContainer">
       {this.state.display}
        </div>
      </div>
    );
    else
    return(
        <h1>loading...</h1>
    )
  }
}

export default Main;
