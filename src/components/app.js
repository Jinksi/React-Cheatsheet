import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSnippets } from '../actions';

import SearchBar from './searchbar';
import SnippetListItem from './snippet-list-item';

class App extends Component {

  componentDidMount(){
    this.props.fetchSnippets();
  }

  renderSnippets(){
    if(!this.props.snippets.all.length){
      return (
      <div className="loading">Loading</div>
      );
    }
    return this.props.snippets.all.map((snip) => {
      return (
        <SnippetListItem
          key={snip.title}
          title={snip.title}
          body={snip.body}
          tags={snip.tags}
          />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        {this.renderSnippets()}
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
