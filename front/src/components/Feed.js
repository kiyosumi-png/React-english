import React from 'react';
import { Route } from 'react-router-dom';
import YouTube from './feed/YouTube';
import Tech from './feed/Tech';
import Daily from './feed/Daily';
import PostBox from'./feed/PostBox';



export default function Feed() {
  
  return (
    // <FeedContext.Provider>
    <div>
      <PostBox/>
        <Route exact path="/Tech" component={ Tech } />
        <Route exact path="/YouTube" component={ YouTube } />
        <Route exact path="/Daily" component={Daily }/>
        This is feed.
    </div>
    // </FeedContext.Provider>
  )
}

