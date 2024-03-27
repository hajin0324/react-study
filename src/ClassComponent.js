import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  // defaultProps와 propTypes를 class 외부에서 지정하는 방법
  static defaultProps = {
		name: 'default'
	};
	
	static propTypes = {
		name: PropTypes.string,
		favoriteNumber: PropTypes.number.isRequires
	};
  
  render () {
    const { name, num, children } = this.props; 
    return (
      <div>
        hello, my name is {name} <br />
        my number is {num} <br />
        children value is {children}
		  </div>
    );
  }
}

// defaultProps와 propTypes를 class 외부에서 지정하는 방법
// MyComponent.defaultProps = { 
//   name: 'default'
// }

// MyComponent.propTypes = {
// 	name: PropTypes.string,  
// 	favoriteNumber: PropTypes.number.isRequired  
// };

export default MyComponent;