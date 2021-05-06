import Form from 'react-bootstrap/Form';
import Buttons from '../Buttons';
import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { handleSignup } from '../../api/users';
import { UserContext } from '../../App';

export const SignupForm = () => {
	const [redirect, setredirect] = useState(false);
	const { handleAlert, setProfile } = useContext(UserContext);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = (formAnswers) => {
		handleSignup(formAnswers)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				const user = {
					id: res.data.id,
					email: res.data.email,
					username: res.data.username,
					description: res.data.description,
				};

				handleAlert('success', 'Registration has been a success');
				// setredirect(true);
			})
			.catch((error) => handleAlert('danger', error.response.data.error));
	};
	console.log(setProfile);

	const styleError = { color: 'red' };

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group controlId='Email'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						{...register('email', {
							required: true,
							pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						})}
						type='email'
						placeholder='Enter email'
					/>

					{errors.email && (
						<span style={styleError}>Please check your email informations</span>
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
						<span style={styleError}>
							Must contain at least 1 lowercase letter - 1 capital letter - 1
							number - 1 special character:!@#$%^&*
						</span>
					)}
				</Form.Group>

				<Form.Group controlId='Username'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						{...register('username', { required: true, maxLength: 20 })}
						type='text'
						placeholder='Your best username'
					/>

					{errors.username && (
						<span style={styleError}>
							Sorry we really want to know you more...
						</span>
					)}
				</Form.Group>

				<Form.Group controlId='Description'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						{...register('description', { required: true, maxLength: 150 })}
						type='text'
						placeholder='Say something about you'
					/>

					{errors.description && (
						<span style={styleError}>
							Sorry, we really want to know you more
						</span>
					)}
				</Form.Group>

				<Buttons
					text='Register'
					variant='success'
					type='submit'
					disabled={isSubmitting}
					// onClick={() => setredirect(true)}
				></Buttons>
			</Form>
			{redirect && <Redirect to='/profile' />}
		</>
	);
};

export default SignupForm;
