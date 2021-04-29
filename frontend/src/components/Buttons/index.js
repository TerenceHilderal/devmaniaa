import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Buttons = ({ onClick, text, variant, size, type, disabled }) => {
	return (
		<Button
			variant={variant}
			size={size}
			block
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{text}
		</Button>
	);
};

export default Buttons;

Buttons.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string,
	variant: PropTypes.string,
	size: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.func,
};
