import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/navbar/';
import Footer from '../components/footer/';
import Home from '../components/home/';
import Projects from '../components/projects/';
import Contact from '../components/contact/';

const Routed = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/contact' component={Contact}/>
      <Footer />
    </Router>
  )
}

export default Routed;