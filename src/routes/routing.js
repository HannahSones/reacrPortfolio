import { HashRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Menu from '../components/Menu/menu';
import Home from '../components/HomePage/home';
import Portfolio from '../components/PortfolioPage/portfolio';
import Contact from '../components/Contact/contact';
import Footer from '../components/Footer/footer';

const Routing = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Menu />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/portfolio' component={Portfolio}/>
      <Route exact path='/contact' component={Contact}/>
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routing;