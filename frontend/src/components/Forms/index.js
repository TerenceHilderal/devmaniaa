import Form from 'react-bootstrap/Form';
import Buttons from '../Buttons';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

export const Forms = () => {
	const [redirect, setredirect] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	const styleError = { color: 'red' };

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group controlId='formBasicEmail'>
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

				<Form.Group controlId='formBasicPassword'>
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
							Must contain at least east 1 lowercase letter - 1 capital letter -
							1 number - 1 special character:!@#$%^&*
						</span>
					)}
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
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

				<Form.Group controlId='formBasicPassword'>
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
					disabled={isSubmitted}
					onClick={() => setredirect(true)}
				></Buttons>
			</Form>
			{redirect && <Redirect to='/profile' />}
		</>
	);
};

export default Forms;
