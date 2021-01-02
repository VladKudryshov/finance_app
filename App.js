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
  StatusBar,
} from 'react-native';

import {Header,Colors } from 'react-native/Libraries/NewAppScreen';

import CardWidget from './CardWidget';
import Carousel from './Carousel';
import Wallet from './Wallet';

const wallets = [
  {
    name: "Зарплата",
    type: 'visa',
    balance: 1234,
    currency: 'BYN',
    income: 1231,
    spend: 123,
    theme: 'theme1'
  },
  {
    name: "Копилка",
    type: 'Копилка',
    balance: 1234,
    currency: 'BYN',
    income: 1231,
    spend: 123,
    theme: 'theme6'
  },
  {
    name: "Копилка",
    type: 'Копилка',
    balance: 1234,
    currency: 'BYN',
    income: 1231,
    spend: 123,
    theme: 'theme6'
  },
  {
    name: "Копилка",
    type: 'Копилка',
    balance: 1234,
    currency: 'BYN',
    income: 1231,
    spend: 123,
    theme: 'theme6'
  },
  {
    name: "Копилка",
    type: 'Копилка',
    balance: 1234,
    currency: 'BYN',
    income: 1231,
    spend: 123,
    theme: 'theme6'
  }
]

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <CardWidget style={{gridColumn: '1/2', gridRow: '1/2', boxShadow: 'none', background: 'none'}}
                        title="Мои кошельки" titleFil="#000000">
              <Carousel childrenType="controls">
                {wallets.map(child=><Wallet item={child}/>)}
              </Carousel>
            </CardWidget>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
