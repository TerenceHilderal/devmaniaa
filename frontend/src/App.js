import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

const App = () => {
	return (
		<>
			<Router>
				<Route exact path='/' component={Homepage} />
			</Router>
		</>
	);
};

export default App;
