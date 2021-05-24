import axios from 'axios';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

const url_api_posts = 'http://localhost:7000/api/posts';

export const sendingNewPost = (formAnswers) =>
	axios.post(`${url_api_posts}/post`, formAnswers);
