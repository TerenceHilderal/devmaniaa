import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Buttons from '../Buttons';
import Alerts from '../Alert';
import LoginForm from './LoginForm';
import { UserContext } from '../../App';

export const Login = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { alert } = useContext(UserContext);

	return (
		<>
			<Buttons
				variant='outline-success'
				size='lg'
				text='Login'
				onClick={handleShow}
			></Buttons>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title> <br />
				</Modal.Header>
				<Modal.Body>
					{' '}
					<LoginForm />{' '}
				</Modal.Body>
				{alert && <Alerts variant={alert.variant} text={alert.text} />}
			</Modal>
		</>
	);
};

export default Login;
