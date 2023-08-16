import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import Dashboard from './component/Dashboard';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './component/AddUser';
import AddMovies from './component/AddMovies';
import LogIn from './component/LogIn';
import UserList from './component/UserList';
import MovieList from './component/MovieList';
import BookingList from './component/BookingList';
import BookingDetailsList from "./component/BookingDetailList";
import AddBooking from "./component/AddBooking";


function App() {
  return (
    <div class="wrapper">

      < BrowserRouter>
      <Header/>
      <Menu/>
      <Routes>

      <Route path='/'
        element={<Dashboard />}>
      </Route>
      <Route path='/add'
        element={<Dashboard />}>
      </Route>
      <Route path='/user'
        element={<UserList />}>
      </Route>

      <Route path='/movies'
        element={<MovieList />}>
      </Route>

      <Route path='/booking'
        element={<BookingList />}>
      </Route>

      <Route path='/BookingDetailsList'
      element={<BookingDetailsList />}>
      </Route>

      <Route path='/AddBooking'
      element={<AddBooking />}>
      </Route>

      <Route path='/userForm'
        element={<AddUser />}>
      </Route>
      <Route path='/movieForm'
        element={<AddMovies />}>
      </Route>
      <Route path='/LogIn'
        element={<LogIn />}>

      </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
