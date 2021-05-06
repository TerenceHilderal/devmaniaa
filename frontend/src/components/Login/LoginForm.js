import Form from 'react-bootstrap/Form';
import Buttons from '../Buttons';
import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { handleLogin } from '../../api/users';
import { UserContext } from '../../App';

export const LoginForm = () => {
	const [redirect, setredirect] = useState(false);
	const { handleAlert } = useContext(UserContext);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = (formAnswers) => {
		handleLogin(formAnswers)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				handleAlert('success', 'Registration has been a success');
				setredirect(true);
			})
			.catch((error) => handleAlert('danger', error.response.data.error));
	};

	const styleError = { color: 'red' };

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group controlId='Email'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						{...register('email', {
							required: true,
							// pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						})}
						type='email'
						placeholder='Enter email'
					/>

					{errors.email && (
						<span style={styleError}>
							{' '}
							Please check your email informations
						</span>
					)}
				</Form.Group>

				<Form.Group controlId='Password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						{...register('password', {
							required: true,
							pattern: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
						})}
						type='password'
						placeholder='Password'
					/>

					{errors.password && (
						<span style={styleError}>Probably missing something...</span>
					)}
				</Form.Group>

				<Buttons
					text='Login'
					variant='success'
					type='submit'
					disabled={isSubmitting}
				></Buttons>
			</Form>
			{redirect && <Redirect to='/profile' />}
		</>
	);
};

export default LoginForm;
