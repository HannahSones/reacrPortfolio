import React from 'react'
import Menu from './components/Menu/menu'
import Banner from './components/Banner/banner'
import Profile from './components/Profile/profile'
import Projects from './components/Projects/projects'
import Skillset from './components/Skillset/skillset'
import ScrollBar from './components//Parallax/parallaxBar'
import Footer from './components/Footer/footer'

function App() {

  return (
    <div className="App">
      <Menu />
      <Banner />
      <Profile />
      <Projects />
      <Skillset />
      <ScrollBar />
      <Footer />

    </div>
  );
}

export default App;