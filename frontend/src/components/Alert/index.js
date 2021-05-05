import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

const Alerts = ({ variant, text }) => {
	return (
		<>
			<Alert variant={variant}>
				<p className='mb-0'>{text}</p>
			</Alert>
		</>
	);
};
export default Alerts;

Alerts.propTypes = {
	variant: PropTypes.string,
	text: PropTypes.string,
};
