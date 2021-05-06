import React from 'react';
import logo from './hacker.svg';
import panthere from './panthere.jpeg';
import Signup from '../Signup';
import Login from '../Login';
import './landingPage.css';

const LandingPage = () => {
	return (
		<div className='Homepage'>
			<header className='Homepage-header'>
				<img src={logo} className='Homepage-logo' alt='logo' />
				<div className='Homepage-main'>
					<img src={panthere} className='Homepage-panthere' alt='panthere' />
					<h1>It's more than a job</h1>
					<h2>
						Join a dev community :<b>DevManiaa</b>{' '}
					</h2>
					<Signup />
					<Login />
				</div>
			</header>
		</div>
	);
};

export default LandingPage;
