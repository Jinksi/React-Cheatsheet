---
tags:
- react
title: Class-Based Component
---

````
import React, { Component } from 'react';

class NewComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'New Component'
    };
  }
  render() {
    return(
      <div>{this.props.title}</div>
    );
  }
}

export default NewComponent;
````

## YOLO
Chia quinoa meh, you probably haven't heard of them sartorial Holowaychuk pickled post-ironic. Plaid ugh vegan, Sixpoint 8-bit sartorial artisan semiotics put a bird on it Mission bicycle rights Club-Mate vinyl.

----------
