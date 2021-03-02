/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitleBarlow: {
    fontSize: 24,
    color: Colors.black,
    fontFamily: 'Barlow-Regular',
  },
  sectionTitleRaleway: {
    fontSize: 24,
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Raleway-Regular',
  },
  sectionDescriptionBarlow: {
    marginTop: 8,
    fontSize: 18,
    color: Colors.dark,
    fontFamily: 'Barlow-Regular',
  },
  sectionDescriptionRaleway: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '300',
    color: Colors.dark,
    fontFamily: 'Raleway-Regular',
  },
});

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitleBarlow}>
              This Section Using Barlow Fonts
            </Text>
            <Text style={styles.sectionDescriptionBarlow}>
              Welcome to React Native App
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitleRaleway}>
              This Section Using Raleway Fonts
            </Text>
            <Text style={styles.sectionDescriptionRaleway}>
              Welcome to React Native App
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);

export default App;
