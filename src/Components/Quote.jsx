import React from 'react';
import './quote.css';

export default class Quote extends React.Component {
  render() {
    return (
      <div className='quote'>
        {this.props.quote}
      </div>
    )
  }
}
