import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/Context/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PurchesePage from './components/PurchesePage/PurchesePage';
import UserDashboard from './components/Dashboard/UserDashboard/UserDashboard';
import AddNew from './components/Dashboard/AddNew/AddNew';
import AdminProducts from './components/Dashboard/UserDashboard/AdminProducts/AdminProducts';
import Orders from './components/Dashboard/Orders/Orders';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Reviews from './components/Dashboard/Review/Reviews';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path = "/products">
            <AllProducts></AllProducts>
          </Route>

          
          <PrivateRoute path="/purchese/:pId">
            <PurchesePage></PurchesePage>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path = "/register"> 
            <Register></Register>
          </Route>

          <Route path = "/all-products">
            <AdminProducts></AdminProducts>
          </Route>

          <Route path = "/addNew">
            <AddNew></AddNew>
          </Route>

          <Route path = "/orders">
            <Orders></Orders>
          </Route>

          <Route path = "/admin"> 
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route path = "/orderList"> 
            <Orders></Orders>
          </Route>

          
          <Route path = "/comments"> 
            <Reviews></Reviews>
          </Route>

          
          <Route path = "/dashboard">
           <UserDashboard></UserDashboard>
          </Route>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
