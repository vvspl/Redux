import React from 'react';
import Header from './Header';
import { DataContext } from './data-context';

class App extends React.Component {
  state = {
    name: 'Nikola Tesla',
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  };
  render() {
    return (
      <div className="page">
        <DataContext.Provider value={this.state}>
          <Header />
        </DataContext.Provider>
      </div>
    );
  }
}

export default App;
