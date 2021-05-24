import React, { useState } from 'react';
import './postForm.css';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { sendingNewPost } from '../../api/posts';

const PostForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = (data) => {
		const formData = new FormData();
		formData.append('content', data.content);
		formData.append('attachment', data.attachment[0]);

		sendingNewPost(formData)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className='card postform'>
				<form
					method='POST'
					onSubmit={handleSubmit(onSubmit)}
					encType='multipart/form-data'
					className='postForm'
				>
					<div className='card-body'>
						<label htmlFor='content'></label>
						<textarea
							className='form-control formInput'
							placeholder='Tell us something...'
							id='content'
							name='content'
							{...register('content', { required: true })}
						/>

						<label className='' htmlFor='attachment'></label>
						<input
							className='form-control attachment'
							id='attachment'
							name='attachment'
							type='file'
							width='30%'
							{...register('attachment', { required: true })}
						/>

						<hr />

						<Button variant='success' type='submit'>
							{' '}
							Post-it
						</Button>
					</div>
				</form>
			</div>
			<hr />
		</>
	);
};

export default PostForm;
