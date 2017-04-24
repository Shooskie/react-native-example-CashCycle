import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button, PricingCard } from 'react-native-elements';
import { getBalance, depositChanged, deposit, withdraws } from '../actions';

class Sliders extends Component {
  onAmountChange(value) {
    this.props.depositChanged(value);
  }
  onDepositPress() {
    const { amount, balance } = this.props;
    this.props.deposit({ amount, balance });
  }
  onWithdrawPress() {
    const { withdraw, balance } = this.props;
    this.props.withdraws({ withdraw, balance });
  }
  render() {
    const x = this.props.amount;
    const y = this.props.withdraw;
  return (
      <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <PricingCard
            containerStyle={{
              marginTop: 50 }}
            priceStyle={{ color: '#95a5a6' }}
            color='#4f9deb'
            title='Current Account'
            price={this.props.balance}
            info={['you currently have']}
            button={{ title: 'INVEST', icon: 'flight-takeoff' }}
          />
        </View>
        <View
          style={{
            flex: 2,
            paddingBottom: 20,
            borderRadius: 5,
            marginRight: 15,
            marginLeft: 15 }}
        >
          <View style={{ marginRight: 5, marginLeft: 5}}>
            <FormLabel labelStyle={{ color: '#4f9deb' }}>Deposit</FormLabel>
            <FormInput
              placeholder={'$'}
              keyboardType={'numeric'}
              value={x}
              onChangeText={value => this.props.depositChanged({ prop: 'amount', value })}
            />
            <Button
              title='DEPOSIT'
              buttonStyle={{ backgroundColor: '#4f9deb' }}
              onPress={this.onDepositPress.bind(this)}
            />
          </View>
          <View >
            <FormLabel labelStyle={{ color: '#4f9deb' }} >Withdraw</FormLabel>
            <FormInput
              placeholder={'$'}
              keyboardType={'numeric'}
              value={y}
              onChangeText={value => this.props.depositChanged({ prop: 'withdraw', value })}
            />
            <Button
              title='WITHDRAW'
              buttonStyle={{ backgroundColor: '#4f9deb'}}
              onPress={this.onWithdrawPress.bind(this)}
            />
          </View>
        </View>
      </View>
      </ScrollView>
   );
 }
}
const mapStateToProps = (state) => {
  const { balance, amount, withdraw } = state.balance;
  return { balance, amount, withdraw };
};

export default connect(mapStateToProps, {
   getBalance, depositChanged, deposit, withdraws
})(Sliders);
