import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import SignupForm from './SignupForm';
import Buttons from '../Buttons';
import PropTypes from 'prop-types';
import Alerts from '../Alert';
import { UserContext } from '../../App';

export const Signup = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { alert } = useContext(UserContext);

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
					<Modal.Title>Welcome! Welcome </Modal.Title> <br />
				</Modal.Header>
				<Modal.Body>
					<SignupForm />
				</Modal.Body>
				{alert && <Alerts variant={alert.variant} text={alert.text} />}
			</Modal>
		</>
	);
};

export default Signup;

Signup.propTypes = {
	title: PropTypes.string,
};
