import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSnippets } from '../actions';

class App extends Component {

  componentDidMount(){
    this.props.fetchSnippets();
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">React CheatSheet</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    snippets: state.snippets
  };
}

export default connect(mapStateToProps, { fetchSnippets: fetchSnippets })(App);
