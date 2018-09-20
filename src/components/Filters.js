import React from "react";

// const Filters = props => {
//   console.log(this.state);
//   return (
//     <div className="ui form">
//       <h3>Animal type</h3>
//       <div className="field">
//         <select
//           name="type"
//           id="type"
// onChange={e => {
// this.setState({
//   greaseFilter: e.target.value
// });
// }}
//         >
//           <option value="all">All</option>
//           <option value="cat">Cats</option>
//           <option value="dog">Dogs</option>
//           <option value="micropig">Micropigs</option>
//         </select>
//       </div>
//
//       <div className="field">
//         <button
// onClick={e => {
//   console.log(e);
// }}
//           className="ui secondary button"
//         >
//           Find pets
//         </button>
//       </div>
//     </div>
//   );
// };

class Filters extends React.Component {

  filterList = () => {
    console.log(this.props.onChange)
    this.props.onChange(!this.props.greaseFilter)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            name="type"
            id="type"
            onChange={e => {
              this.setState({
                greaseFilter: e.target.value
              });
            }}
          >
          //   <option value="all">All</option>
          //   <option value="cat">Cats</option>
          //   <option value="dog">Dogs</option>
          //   <option value="micropig">Micropigs</option>
          // </select>
        </div>

        <div className="field">
          <button
            onClick={this.filterList}
            className="ui secondary button"
          >
            Filter by Greased
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
