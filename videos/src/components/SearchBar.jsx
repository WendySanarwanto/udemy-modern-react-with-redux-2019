import React from "react";

class SearchBarComponent extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    // console.log(`this.state.term: ${this.state.term}`);
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
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