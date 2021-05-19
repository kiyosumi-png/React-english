import React from 'react';
import YouTube from './feed/YouTube';
import { Route } from 'react-router-dom';
import Tech from './feed/Tech';
import Daily from './feed/Daily';

export default function Feed() {
  return (
    <div>
        <Route exact path="/Tech" component={ Tech }/>
        <Route exact path="/YouTube" component={ YouTube }/>
        <Route exact path="/Daily" component={Daily }/>
        This is feed.
      </div>
  )
}

