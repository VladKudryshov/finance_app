import React from 'react';
import './styles/income.css'
import {
    Text,
    View,
} from 'react-native';

const Wallet = ({item}) => (
    <li aria-hidden="false">
        <View className={['income-item', item.theme].join(" ")}>
            <View className="income-item-title">
                <View className="income-item-name left"><Text>{item.name}</Text></View>
                <View className="income-item-type right">
                    {item.type === 'visa'
                        ? <i className="fab fa-cc-visa"/>
                        : <i className="fas fa-piggy-bank"/>}
                </View>
            </View>
            <View className="amount">
                <Text className="left">Баланс:</Text>
                <View className="right">
                    <Text className="value">{item.balance.toFixed(2)}</Text>
                    <Text className="currency">{item.currency}</Text>
                </View>
            </View>
            <View className="status">
                <View className="income-value left">
                    <Text>Доход:</Text>
                    <Text className="value">{item.income.toFixed(2)}</Text>
                    <Text className="currency">{item.currency}</Text>
                </View>
                <View className="spend-value right">
                    <Text>Расход:</Text>
                    <Text className="value">{item.spend.toFixed(2)}</Text>
                    <Text className="currency">{item.currency}</Text>
                </View>
            </View>
        </View>
    </li>
);


export default Wallet;
