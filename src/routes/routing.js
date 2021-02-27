import { HashRouter as Router, Route } from 'react-router-dom';
import Menu from '../components/Menu/menu';
import Home from '../components/HomePage/home';
import Portfolio from '../components/PortfolioPage/portfolio';
import Contact from '../components/Contact/contact';
import Footer from '../components/Footer/footer';

const Routing = () => {
  return (
    <Router basename="/">
      <Menu />
      <Route exact path='/' component={Home}/>
      <Route exact path='/portfolio' component={Portfolio}/>
      <Route exact path='/contact' component={Contact}/>
      <Footer />
    </Router >
  )
}

export default Routing;