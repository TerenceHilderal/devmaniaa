import axios from 'axios';

// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

const url_api_users = 'http://localhost:7000/api/users';

export const handleSignup = (formAnswers) =>
	axios.post(`${url_api_users}/signup`, formAnswers);
