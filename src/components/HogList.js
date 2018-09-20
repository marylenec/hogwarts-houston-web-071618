// index, has class and has a state and it passes it down to Hog as prop
// state of hog list is...
// filtered hogs or storted hogs or render all
// bring state up to common parent, the App

import React from 'react';
import hogs from '../porkers_data'
import Hog from './Hog'
// import { baseInfo, detailedInfo } from './Hog'

// Can only return a single element. Hence, wrap each hog inside a <div>.
class HogList extends React.Component {

  generateTiles = () => {
    let selectedHogs = hogs
    if(this.props.greaseFilter==true) {
      selectedHogs = hogs.filter( hog => hog.greased == true)
    }
    return selectedHogs.map( hog => {
        return <Hog {...hog} />
    })
  }

  // renderOnlyGreased = () => {
  //   console.log(hogs)
  //   return h
  //   console.log(hogs)
  // }


// class component must render(){} something.
  render(){
    // this.props.greased == true ? renderOnlyGreased : renderOnlyNotGreased

    return (
      <div className='ui grid container'>
        {this.generateTiles()}
      </div>
    )
  }
}

export default HogList
