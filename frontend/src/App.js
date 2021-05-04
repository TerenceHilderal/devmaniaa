import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import { createContext } from 'react';

const App = () => {
	const UserContext = createContext();
	return (
		<>
			<UserContext.Provider value>
				<Router>
					<Route exact path='/' component={Homepage} />
				</Router>
			</UserContext.Provider>
		</>
	);
};

export default App;
