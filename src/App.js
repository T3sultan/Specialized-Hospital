import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import FindADoctor from './components/FindADoctor/FindADoctor';
import OnlineMedicine from './components/OnlineMedicine/OnlineMedicine';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/serviceDetails/:id">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route exact path="/doctor">
              <FindADoctor></FindADoctor>
            </Route>
            <Route exact path="/medicine">
              <OnlineMedicine></OnlineMedicine>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
