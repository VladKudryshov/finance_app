/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Wallet from './Wallet.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wallets: [
                {
                    name: 'Зарплата',
                    type: 'visa',
                    balance: 1234,
                    currency: 'BYN',
                    income: 1231,
                    spend: 123,
                    theme: 'theme1',
                },
                {
                    name: 'Копилка',
                    type: 'Копилка',
                    balance: 1234,
                    currency: 'BYN',
                    income: 1231,
                    spend: 123,
                    theme: 'theme6',
                },
                {
                    name: 'Копилка',
                    type: 'Копилка',
                    balance: 1234,
                    currency: 'BYN',
                    income: 1231,
                    spend: 123,
                    theme: 'theme6',
                },
                {
                    name: 'Копилка',
                    type: 'Копилка',
                    balance: 1234,
                    currency: 'BYN',
                    income: 1231,
                    spend: 123,
                    theme: 'theme6',
                },
                {
                    name: 'Копилка',
                    type: 'Копилка',
                    balance: 1234,
                    currency: 'BYN',
                    income: 1231,
                    spend: 123,
                    theme: 'theme6',
                },
            ],
        };
    }

    renderItem = ({item}) => (
        <Wallet item={item}/>
    );

    render(): React$Node {
        return <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <FlatList
                        style={{margin: 40}}
                        data={this.state.wallets}
                        numColumns = {3}
                        renderItem={this.renderItem}
                    />

                </ScrollView>
            </SafeAreaView>
        </>;
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
});

export default App;
