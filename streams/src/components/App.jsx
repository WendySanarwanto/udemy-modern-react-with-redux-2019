import React, { Component } from 'react';
import { 
        //  HashRouter,
        //  MemoryRouter,
        // BrowserRouter,
        Router,
        Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import customHistory from '../history';

class App extends Component {
  render() {
    return (
      <div className="ui container" >
        {/* <HashRouter> */}
        {/* <MemoryRouter> */}
        {/* <BrowserRouter> */}
        <Router history={ customHistory }>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate}/>
            <Route path="/streams/edit/:id" exact component={StreamEdit}/>
            <Route path="/streams/delete/:id" exact component={StreamDelete}/>
            <Route path="/streams/show" exact component={StreamShow}/>
          </div>
        </Router>
        {/* </BrowserRouter> */}
        {/* </HashRouter> */}
        {/* </MemoryRouter> */}
      </div>
    );
  }
}

export default App;