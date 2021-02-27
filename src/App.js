import React from 'react'
import Navbar from './components/Navbar/navbar'
import Banner from './components/Banner/banner'
import Profile from './components/Profile/profile'
import Projects from './components/Projects/projects'
import ScrollBar from './components//Parallax/parallaxBar'
import Skillset from './components/Skillset/skillset'
import CV from './components/CV/cv'
import Footer from './components/Footer/footer'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Profile />
      <Projects />
      <ScrollBar />
      <Skillset />
      <CV />
      <Footer />

    </div>
  );
}

export default App;