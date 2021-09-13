import { React, Fragment } from 'react'
import './App.css';
import NavBar from './component/navbar/NavBar';
import Hero from './Screens/herro/Hero';
import BannerCampains from './Screens/banner/BannerCampains';
import DigitalLearning from "./Screens/DigitalLearning/DigitalLearning"
import InterestedLearning from "./Screens/InterestedLearning/InterestedLearning"
import SuccessStories from "./Screens/SuccessStories/SuccessStories"
import Instructors from "./Screens/Instructors/Instructors"
function App() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <BannerCampains />
      <DigitalLearning />
      <InterestedLearning />
      <SuccessStories />
      <Instructors />

    </Fragment>
  );
}

export default App;
