import './App.css'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { LandingScreen } from './pages/landingpage/landingscreen';
import { SignIn } from './pages/authenticationpage/signIn';
import { SignUp } from './pages/authenticationpage/signUp';
import { ForgetPassword } from './pages/authenticationpage/forgetPassword';
import { AcceptInvite } from './pages/invite/acceptInvite';
import { PasswordReset } from './pages/invite/passwordReset';
import { HomeScreen } from './pages/dashboard/pages/home/HomeScreen';
import { BiblioScreen } from './pages/dashboard/pages/bibliotheque/biblioscreen';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={ <LandingScreen/>}/>
          <Route path="/auth/login" element={ <SignIn/>}/>
          <Route path="/auth/register" element={ <SignUp/>}/>
          <Route path="/auth/password/forget" element={ <ForgetPassword/>}/>
          <Route path="/password/reset" element={ <PasswordReset/>}/>
          <Route path="/member/invite" element={ <AcceptInvite/>}/>
          <Route path="/tableau" element={ <HomeScreen/>}/>
          <Route path="/bibliothèque" element={ <BiblioScreen/>}/>
        </Routes>
    </Router>
  )
}

export default App
