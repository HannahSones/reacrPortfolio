import React from 'react'
import Navbar from './components/navbar'
import Banner from './components/banner'
import Profile from './components/profile'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Profile />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;