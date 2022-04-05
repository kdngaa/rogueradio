// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from './components/Splash';
import UploadForm from './components/UploadForm'
import { getSongs } from './store/song'
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    // dispatch(getSongs())
  }, [dispatch]);
  const sessionUser = useSelector(state => state.session.user)

  return (

    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            <Splash />
          </Route>
          <Route path='/upload' >
            <UploadForm user={sessionUser} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
