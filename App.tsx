

import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';







function App(): React.JSX.Element {


  return (
    <View>



    <View style={[styles.container]}>
      <TouchableOpacity>
        <View style={styles.actionBtn}>
        <Text style={styles.actionBtnTxt}>Press ME</Text>
        </View>
      </TouchableOpacity>
    </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',

  },
  actionBtn: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
  },
  actionBtnTxt: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
 
});

export default App;
