import React, { Component } from 'react';
import { render } from 'react-dom';
import UserNameContextConsumer from './context/UserNameContectConsumer';
import {
  UserNameContextProvider,
  useUserName,
} from './context/UserNameContext';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}



class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <UserNameContextProvider>
        <UserNameContextConsumer />
        <Hello name={name} />
        <p>Start editing to see some magic happen :) test</p>
      </UserNameContextProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
