import PropTypes from 'prop-types';

const FunctionComponent = ({ name, num, children }) => {
  return (
	  <div>
			hello, my name is {name} <br />
      my number is {num} <br />
			children value is {children}
		</div>
	);
};

FunctionComponent.defaultProps = { 
  name: 'default'
}

FunctionComponent.propTypes = {
	name: PropTypes.string, 
	num: PropTypes.number.isRequired  
};

export default FunctionComponent;