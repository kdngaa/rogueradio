// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from './components/Splash';
import UploadForm from "./components/UploadForm/UploadForm";
import { getSongs } from './store/song'
import OneSong from './components/SingleSongPage';
import EditSong from './components/EditForm';
// import ProtectedRoute from './components/auth/ProtectedRoute';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const songs = useSelector((state) => state.song)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getSongs())
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
            <Splash songs={songs}/>
          </Route>
          <Route path='/upload' >
            <UploadForm user={sessionUser} />
          </Route>
          <Route exact path='/songs/:songId' >
            <OneSong />
          </Route>
          <Route exact path='/songs/:songId/edit' >
            <EditSong />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
