import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import styles
import './search-input.css'

class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      textInput: "",
    }
    this.toggle = this.toggle.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
      textInput: "",
    }));
  }

  onInputChange(input) {
    const query = input.target.value;
    this.setState({textInput: query});
    this.props.history.push(`/search/${query}`);
    if(query === "") {
      this.props.history.push('/');
    }
  }

  render() {
    let searchBoxClasses = ["search-box"];
    let closeButtonClasses = ["search-box__close"];
    if(this.state.isActive) {
      searchBoxClasses.push("active");
      if(this.state.textInput !== "") {
        closeButtonClasses.push("active");
      }
    }

    return (
      <div className={searchBoxClasses.join(' ')}>
        <i className="fa fa-search search-box__icon" onClick={this.toggle}></i>
        <input className="search-box__input" placeholder="Título, personas, generos" value={this.state.textInput} onChange={this.onInputChange} />
        <i className={`fa fa-times ${closeButtonClasses.join(' ')}`} onClick={this.toggle}></i>
      </div>
    );
  }
}

export default withRouter(SearchInput);
