import React from 'react';
import type { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import Loader from './src/components/Loader';
import Login from './src/screens/Auth/Login';

function App(): React.JSX.Element {

  return (
    <>
      {/* <Loader /> */}

      {/* <Text>Hellow world</Text> */}
      <Login />
    </>
  );
}


export default App;
