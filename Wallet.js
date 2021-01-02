import React from 'react';
import './styles/income.css'
import {
    Text,
    View,
} from 'react-native';

const Wallet = ({item}) => (
    <li aria-hidden="false">
        <div className={['income-item', item.theme].join(" ")}>
            <div className="income-item-title">
                <div className="income-item-name left"><Text>{item.name}</Text></div>
                <div className="income-item-type right"><View>{item.type === 'visa' ? <i className="fab fa-cc-visa"/> :
                    <i className="fas fa-piggy-bank"/>}</View></div>
            </div>
            <div className="amount">
                <span className="left"><Text>Баланс:</Text></span>
                <div className="right">
                    <span className="value"><Text>{item.balance.toFixed(2)}</Text></span>
                    <span className="currency"><Text>{item.currency}</Text></span>
                </div>
            </div>
            <div className="status">
                <div className="income-value left">
                    <span><Text>Доход:</Text></span>
                    <span className="value"><Text>{item.income.toFixed(2)}</Text></span>
                    <span className="currency"><Text>{item.currency}</Text></span>
                </div>
                <div className="spend-value right">
                    <span><Text>Расход:</Text></span>
                    <span className="value"><Text>{item.spend.toFixed(2)}</Text></span>
                    <span className="currency"><Text>{item.currency}</Text></span>
                </div>
            </div>
        </div>
    </li>
);


export default Wallet;
