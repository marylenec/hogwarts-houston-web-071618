import React from 'react'
import '../App.css';
import Nav from './Nav';
import Hog from './Hog';
import HogList from "./HogList";
import Filters from "./Filters";
import hogs from '../porkers_data';

// pass the filter and sort on the props

class App extends React.Component {

  constructor() {
      super();
      this.state = ({
        greaseFilter: false
      });
    }

  handleChange = (value) =>{
    this.setState({
      greaseFilter: value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          < Nav />
          < Filters greaseFilter={this.state.greaseFilter} onChange={this.handleChange}/>
          < HogList hogs={hogs} greaseFilter={this.state.greaseFilter}/>
      </div>
    )
  }
}

export default App;
