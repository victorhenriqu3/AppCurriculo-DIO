import React from 'react';
import {StatusBar} from 'react-native';
import ProfilePhoto from './Components/ProfilePhoto';
import {BackgroundSafeArea, BackgroundScrool} from './Styles/App';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#383a59" />
      <BackgroundSafeArea>
        <BackgroundScrool>
          <ProfilePhoto />
        </BackgroundScrool>
      </BackgroundSafeArea>
    </>
  );
};

export default App;
