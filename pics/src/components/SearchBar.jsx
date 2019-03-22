import React from "react";

// const SearchBarComponent = () => {
//   return <div>
//     <input ></input>
//   </div>
// };

class SearchBarComponent extends React.Component {
  state = { term: '' };

  // constructor(props) {
  //   super(props);

  //   // This is a way to solve `Cannot read property 'xyz' of undefined ` error
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  // NOTE: If you go on this way, you will need to bind this method, inside constructor
  // onFormSubmit(event) {
  //   event.preventDefault();

  //   console.log(`this.state.term: ${this.state.term}`);
  // }

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log(`this.state.term: ${this.state.term}`);
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" 
                   value={this.state.term}
                   onChange={e => this.setState({ term: e.target.value })}/>
          </div>
        </form>
      </div>
    );
  };
}

export default SearchBarComponent;