import React, { Component } from 'react';
import Regex from './regex';

import { patterns } from '../data';

export default class App extends Component {

  renderPatterns() {
    var i = 0,z = 0,
      sortedData = [[],[],[]],
      index = 0;

    for(var j = 0;j < patterns.length;j++) {
      if(index%3===0) {
        index = 0;
      }

      sortedData[index].push(patterns[j]);
      index++;
    }

    return sortedData.map((data) => {

      i++;
      var panels = data.map((props) => {
        z++;
        return <Regex {...props} key={z} />
      });
      return (
        <div className="col-xs-12 col-sm-6 col-md-4" key={i}>
           {panels}
        </div>
      );
    });
  }
  render() {
    return (
      <div className="row">{this.renderPatterns()}</div>
    );
  }
}
