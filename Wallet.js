import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCcVisa} from '@fortawesome/free-brands-svg-icons';
import {faPiggyBank} from '@fortawesome/free-solid-svg-icons';

class Wallet extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return <View aria-hidden="false">
            <View style={[styles.incomeItem, styles.theme1]}>
                <View style = {[styles.incomeItemTitle, styles.flexRow]}>
                    <Text style={[styles.theme1, styles.left, styles.label]}>{this.props.item.name}</Text>

                    {this.props.item.type === 'visa'
                        ? <FontAwesomeIcon style={[styles.theme1, styles.right]} icon={faCcVisa} size = {40}/>
                        : <FontAwesomeIcon style={[styles.theme1, styles.right]} icon={faPiggyBank} size = {40}/>}

                </View>
                <View style={styles.flexRow}>
                    <Text style={[styles.theme1, styles.left, styles.label]}>Баланс:</Text>
                    <View style={[styles.right, styles.flexRow]}>
                        <Text style={[styles.theme1, styles.value]}>{this.props.item.balance.toFixed(2)}</Text>
                        <Text style={[styles.theme1, styles.value]}>{this.props.item.currency}</Text>
                    </View>
                </View>
                <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
                    <View style={[styles.right, styles.flexRow]}>
                        <Text style={[styles.theme1, styles.smallLabel]}>Доход:</Text>
                        <Text style={[styles.theme1, styles.smallValue]}>{this.props.item.income.toFixed(2)}</Text>
                        <Text style={[styles.theme1, styles.smallValue]}>{this.props.item.currency}</Text>
                    </View>
                    <View style={[styles.right, styles.flexRow]}>
                        <Text style={[styles.theme1, styles.smallLabel]}>Расход:</Text>
                        <Text style={[styles.theme1, styles.smallValue]}>{this.props.item.spend.toFixed(2)}</Text>
                        <Text style={[styles.theme1, styles.smallValue]}>{this.props.item.currency}</Text>
                    </View>
                </View>
            </View>
        </View>;
    }
}



const styles = StyleSheet.create({
    incomeItem: {
        borderRadius: 20,
        margin: 20,
        width: Dimensions.get('window').width - 40,
        height: 200,
        paddingHorizontal: 30,
        paddingVertical: 20,
        position: 'relative',
        display: 'flex',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 3,
        justifyContent: 'space-between'


    },
    theme1: {
        backgroundColor: '#171717',
        color: '#ffffff',
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
    },
    incomeItemTitle: {
        alignSelf: 'start',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        position: 'relative',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 22
    },
    smallLabel: {
        fontSize: 12
    },
    value: {
        fontSize: 25,
        fontWeight: 700,
        fontFamily: 'Roboto_100Thin'
    },
    smallValue: {
        fontSize: 15,
        fontWeight: 700
    }
});

export default Wallet;
