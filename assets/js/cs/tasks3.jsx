import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import Feed from './feed';
import Users from './users';
import TaskForm from './task-form';
// Code source credit: Nat's lecture notes with modifications by Evan Welsh

export default function tasks3_init(store) {
    ReactDOM.render(
        <Provider store={store}>
          <Tasks3 state={store.getState()} />
        </Provider>,
        document.getElementById('root'),
    );
}

let Tasks3 = connect((state) => state)((props) => {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact={true} render={() =>
            <div>
              <PostForm />
              <Feed tasks={props.tasks} />
            </div>
          } />
          <Route path="/users" exact={true} render={() =>
            <Users users={props.users} />
          } />
          <Route path="/users/:user_id" render={({match}) =>
            <Feed tasks={_.filter(props.tasks, (pp) =>
              match.params.user_id == pp.user.id )
            } />
          } />
        </div>
      </Router>
    );
  });
