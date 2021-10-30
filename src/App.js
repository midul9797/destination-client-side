
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import GoogleLogIn from './Components/GoogleLogIn/GoogleLogIn';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ReviewBooking from './Components/ReviewBooking/ReviewBooking';
import AuthProvider from './Context/AuthProvider';
import ContactUs from './Components/ContactUs/ContactUs';
import PlaceBooking from './Components/PlaceBooking/PlaceBooking';
import MyBookings from './Components/MyBookings/MyBookings';
import ManageAllBookings from './Components/ManageAllBookings/ManageAllBookings';
import AddDestination from './Components/AddDestination/AddDestination';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <GoogleLogIn></GoogleLogIn>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <PrivateRoute path="/reviewBooking/:id">
            <ReviewBooking></ReviewBooking>
          </PrivateRoute>
          <PrivateRoute path="/placeBooking/:_id">
            <PlaceBooking></PlaceBooking>
          </PrivateRoute>
          <PrivateRoute path="/myBookings">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path="/allBookings">
            <ManageAllBookings></ManageAllBookings>
          </PrivateRoute>
          <PrivateRoute path="/addDestination">
            <AddDestination></AddDestination>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
