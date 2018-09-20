// this does not have a state, doesn't change
// container

import React from 'react'
// import hogs from '../porkers_data'

class Hog extends React.Component{

  state = {
    showBase:true
  }

  handleClick = (event) => {
    // showBase = true
    // this.props.onChange(event.target.id)
    this.setState ({showBase: !this.state.showBase})
  }

  baseInfo = () => {
    let imgName = this.props.name.toLowerCase().split(" ").join("_")
    let path = require(`../hog-imgs/${imgName}.jpg`)
    // console.log(path)
    return (
      <div className='ui eight wide column pigTile' onClick={this.handleClick}>
        <img src={path}/>
        <h3>Hi, my name is {this.props.name}.</h3>
        <h5>My specialty is: {this.props.specialty}</h5>
        <p> Greased: {this.props.greased.toString()}</p>
      </div>
    )
  }

  detailedInfo = () => {
    return (
      <div className='ui eight wide column pigTile' onClick={this.handleClick}>
        <p> Ratio: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </p>
        <p> {this.props['highest medal achieved']} </p>
      </div>
    )
  }

  render(){
    return this.state.showBase == false ? this.detailedInfo() : this.baseInfo()
  }
}

export default Hog
