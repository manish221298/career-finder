import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import {Navbar, Nav} from 'react-bootstrap'

import MenuBar from './components/auth/MenuBar'
import Home from './components/static/Home'
import Register from './components/auth/Register' 
import Login from './components/auth/Login' 

// Applicant menubar
import ResumeForm from './components/applicant/ResumeForm'
import CreateResume from './components/applicant/CreateResume'
import ShowResume from './components/applicant/ShowResume'
import EditResume from './components/applicant/EditResume'
import FresherJob from './components/applicant/FresherJobs'
import Assessment from './components/applicant/Assessment'

// Admin menubar
import CreateProfile from './components/company/CreateProfile';
import EditProfile from './components/company/EditProfile';
import ShowApplicant from './components/company/ShowApplicant';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <div>
                <MenuBar />
            </div>

            <Switch>
              <Route path="/" component={Home} exact={true}/>
              <Route path="/users/register" component={Register} />
              <Route path="/users/login" component={Login} />

              <Route path="/resumeform" component={ResumeForm} exact={true}/>
              <Route path="/applicant/createresume" component={CreateResume} exact={true}/>
              <Route path="/showresume" component={ShowResume} exact={true}/>
              <Route path="/applicant/editresume/:id" component={EditResume} exact={true}/>
              <Route path="/assessment/:id" component={Assessment} exact={true}/>

              <Route path="/createprofile" component={CreateProfile} exact={true}/>
              <Route path="/company/editprofile/:id" component={EditProfile} exact={true}/>
              <Route path="/fresherjob" component={FresherJob} exact={true}/>
              <Route path="/showapplicant" component={ShowApplicant} exact={true}/>
            </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
