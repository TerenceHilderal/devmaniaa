import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Forms from '../Forms';
import Buttons from '../Buttons';
import PropTypes from 'prop-types';

export const Signup = ({ title }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Buttons
				variant='success'
				size='lg'
				text='Signup'
				onClick={handleShow}
			></Buttons>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Welcome! Welcome </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Forms />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Signup;

Signup.propTypes = {
	title: PropTypes.string,
};
