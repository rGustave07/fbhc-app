import "./App.css";
import "normalize.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './containers/Home';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/lines">
					<div>
						Hi Chris!
					</div>
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
