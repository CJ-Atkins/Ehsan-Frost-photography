// ROUTER
import { Switch, Route } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import ContactForm from './pages/Contact';
// COMPONENTS
import Nav from './components/Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/contact' exact>
          <ContactForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
