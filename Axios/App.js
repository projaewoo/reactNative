import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import TopBar from './components/TopBar';
import MainContent from './components/MainContent';

const App = () => {

  const [clickedMenu, setClickedMenu] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={[ 'bottom' ]} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding', android: undefined })}
          style={styles.avoid}
        >
            <TopBar setClickedMenu={setClickedMenu} />
            <MainContent />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  }
});

export default App;