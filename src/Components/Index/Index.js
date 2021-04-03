import React , {Component} from "react";


import Home from "./../Home/Index";
import About from "./../About/Index";
import Profile from "./../Profile/index";
import Portofolio from "./../Portofolio/Index";
import SocialMedia from "./../SocialMedia/Index";
import Work from "./../Work/Index";
import Footer from "./../Footer/Index"

class Index extends Component {
  render() {
    return (
      <div>
				<Home />
				<Work />
				<Portofolio />
				<Profile />
				<About />
				<SocialMedia />
				<Footer />
      </div>
    )
  }
}

export default Index;