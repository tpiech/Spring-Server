import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';
import AuctionComponent from './components/AuctionComponent';
import BaseComponent from './components/BaseComponent';
import AddUser from './components/AddUser';
import Login from './components/Login';
import AddOrder from './components/AddOrder';
import AdminBase from './components/AdminBase';
import AddAuction from './components/AddAuction';
import RemoveUserAndAuctions from './components/RemoveUserAndAuctions';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from './components/history';


function App(){
  
  return (
    <div className="App">
      <header className="App-header">
      <Router history = {history}>
    <Switch>
    <Route exact path = "/" > 
    <form action="http://localhost:3000/auctions">
        <input type="submit" value="All auctions" />
      </form>
      <form action="http://localhost:3000/addUser">
          <input type="submit" value="Register" />
      </form>
      <form action="http://localhost:3000/login">
        <input type="submit" value="Login" />
      </form>
    </Route> 
    <Route exact path = "/base" component = {BaseComponent}/> 
    <Route exact path = "/adminBase" component = {AdminBase}/> 
    <Route exact path = "/users" component = {UserComponent}/> 
    <Route exact path = "/auctions" component = {AuctionComponent}/> 
    <Route exact path = "/BuyProduct" component = {AddOrder}/> 
    <Route exact path = "/login" component = {Login}/> 
    <Route exact path = "/addUser" component = {AddUser}/> 
    <Route exact path = "/addAuction" component = {AddAuction}/> 
    <Route exact path = "/removeUser" component = {RemoveUserAndAuctions}/> 
    </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
