import React from 'react';
import styled from 'styled-components';
import {Game} from '../routes/Game';
import {Privacy} from '../routes/Privacy';
import {TermsOfService} from '../routes/TermsOfService';
import {GooglePermissions} from '../routes/GooglePermissions';
import './App.css';
import {Link, Route} from "react-router-dom";

const App = ({className}) => {
  return (
    <div>
        <nav>
            <Link to="/">Play</Link>
        </nav>
        <nav>
            <Link to="/info/privacy">Privacy</Link>
        </nav>
        <nav>
            <Link to="/info/terms-of-service">Terms of Service</Link>
        </nav>
        <nav>
            <Link to="/info/google-permissions">Google Permissions</Link>
        </nav>

        <div>
            <Route exact path="/" component={Game}/>
            <Route path="/info/privacy" component={Privacy}/>
            <Route path="/info/terms-of-service" component={TermsOfService}/>
            <Route path="/info/google-permissions" component={GooglePermissions}/>
        </div>
    </div>
  );
}

export default styled(App)`
  font-family: Courier New, Courier, monospace;
  margin: 0 auto;
  width: 200px;
`;
