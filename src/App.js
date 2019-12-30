import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Feed from "./Feed/Feed";
import Profile from "./Profile/Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CreatePost from "./CreatePost/CreatePost";
import Register from "./Register/Register";
import Login from "./Login/Login";
import EditPofile from "./EditProfile/EditPofile";
import SinglePost from "./SinglePost/SinglePost";


function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <main className="container">
                  <Switch>
                      <Route path="/profile" component={Profile} />
                      <Route path="/register" component={Register} />
                      <Route path="/editprofile" component={EditPofile} />
                      <Route path="/posts/:postId" component={SinglePost}/>
                      <Route path="/login" component={Login} />
                      <Route path="/post/create" component={CreatePost} />
                      <Route path="/" component={Feed} />
                  </Switch>
              </main>
          </div>
      </Router>
  );
}

export default App;
