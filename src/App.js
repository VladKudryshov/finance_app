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
    View,
    StatusBar,
    Pagination,
} from 'react-native';
import * as Font from 'expo-font';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import CardWidget from './CardWidget.jsx';
import Carousel from './Carousel.jsx';
import Wallet from './Wallet.js';

import {useFonts, Roboto_300Light} from '@expo-google-fonts/roboto'
import { AppLoading } from 'expo';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false,
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

    async _loadFontsAsync() {
        await useFonts({Roboto_300Light});
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    renderItem = ({item}) => (
        <Wallet item={item}/>
    );

    render() {
        if (this.state.fontsLoaded) {
            return <>
                <StatusBar barStyle="dark-content"/>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <FlatList
                        style={{flex: 1}}
                        data={this.state.wallets}
                        numColumns = {1}
                        renderItem={this.renderItem}
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
            </>;
        } else return <AppLoading/>
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
});

export default App;
