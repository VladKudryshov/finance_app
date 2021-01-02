import React from 'react';
import './styles/income.css'

const Wallet: () => React$Node = ({item}) => (
    <li aria-hidden="false">
        <div className={['income-item', item.theme].join(" ")}>
            <div className="income-item-title">
                <div className="income-item-name left">{item.name}</div>
                <div className="income-item-type right">{item.type === 'visa' ? <i className="fab fa-cc-visa"/> :
                    <i className="fas fa-piggy-bank"/>}</div>
            </div>
            <div className="amount">
                <span className="left">Баланс:</span>
                <div className="right">
                    <span className="value">{item.balance.toFixed(2)}</span>
                    <span className="currency">{item.currency}</span>
                </div>
            </div>
            <div className="status">
                <div className="income-value left">
                    <span>Доход:</span>
                    <span className="value">{item.income.toFixed(2)}</span>
                    <span className="currency">{item.currency}</span>
                </div>
                <div className="spend-value right">
                    <span>Расход:</span>
                    <span className="value">{item.spend.toFixed(2)}</span>
                    <span className="currency">{item.currency}</span>
                </div>
            </div>
        </div>
    </li>
);


export default Wallet;
