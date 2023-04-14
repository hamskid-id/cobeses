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
import { TelechargerScreen } from './pages/dashboard/pages/telecharger/telechargerScreen';
import { HabitudeScreen } from './pages/dashboard/pages/habitude/habitudeScreen';
import { UtilisateurScreen } from './pages/dashboard/pages/utilisateur/utilisateurScreen';
import { RevenusScreen } from './pages/dashboard/pages/revenus/revenusScreen';
import { LibrarybooksScreen } from './pages/dashboard/pages/librarybooks.jsx/lirbarybooksScreen';
import { InvitedMembersScreen } from './pages/dashboard/pages/membersInvited/innvitedMembersScreen';
import { DetailsScreen } from './pages/dashboard/pages/bookdetails/detailsscreen';

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
          <Route path="/bibliothèque/library/:index" element={ <LibrarybooksScreen/>}/>
          <Route path="/bibliothèque/membre/invites/:index" element={ <InvitedMembersScreen/>}/>
          <Route path="/télécharger" element={ <TelechargerScreen/>}/>
          <Route path="/télécharger/details/:index" element={ <DetailsScreen/>}/>
          <Route path="/lecture" element={ <HabitudeScreen/>}/>
          <Route path="/utilisateurs" element={ <UtilisateurScreen/>}/>
          <Route path="/revenus" element={ <RevenusScreen/>}/>
        </Routes>
    </Router>
  )
}

export default App
