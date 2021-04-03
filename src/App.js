import React , {Component} from "react";
import  {BrowserRouter, Route} from "react-router-dom"
import "./App.css";

import Navbar from "./Components/Navbar/Index";
import Contact from "./Components/Contact/Index";
import Index from "./Components/Index/Index";

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<Navbar />
				<Route exact path="/" component={Index} />
				<Route path="/contact" component={Contact} />
			</BrowserRouter>
    )
  }
}

export default App;