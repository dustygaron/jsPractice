import React from 'react';
import './App.css';
import Text from './components/Text'
import Blob from './components/Blob'

class App extends React.Component {

  render() {
    return (
      <div>
        <Text />
        <Blob />
      </div>
    )
  }

}

export default App
