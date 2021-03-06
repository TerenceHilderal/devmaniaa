import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { createContext, useState } from 'react';
import Alerts from './components/Alert';
export const UserContext = createContext();

const App = () => {
	const [alert, setAlert] = useState(null);

	const handleAlert = (variant, text) => {
		setAlert({ variant, text });
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};

	return (
		<>
			<UserContext.Provider value={{ handleAlert, alert }}>
				<Router>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/alert' component={Alerts} />
				</Router>
			</UserContext.Provider>
		</>
	);
};

export default App;
