import React from 'react';
import './homepage.css';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
	return (
		<>
			{/* <div className='container'>
				<div className='card w-50'>
					<div className='card-body'>
						<form>
							<div className='container'>
								<textarea
									placeholder="What's new?"
									className='card-text'
								></textarea>
							</div>
							<Button variant='outline-success' size='sm' type='submit'>
								Push !{' '}
							</Button>
						</form>
					</div>
				</div>
			</div> */}

			<div class='d-flex flex-row content mx-auto'>
				<div class='flex-fill'>
					<form class='card' method='post'>
						<div class='card-body'>
							<div class='form-group'>
								<textarea
									class='form-control'
									name='content'
									placeholder='What is happening'
								></textarea>
							</div>
						</div>
						<div class='w-100'>
							<Button variant='outline-success' size='sm' type='submit'>
								Push !{' '}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default HomePage;
