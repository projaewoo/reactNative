import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const MainContent = (props) => {

    const [bitcoinInfo, setBitcoinInfo] = React.useState('');
    const [type, setType] = React.useState('');
    const [krwPrice, setKrwPrice] = React.useState('');

    useEffect(() => {
        axios.get("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
          .then(res => setBitcoinInfo(res.data[0]))
      }, [])

      useEffect(() => {
          setKrwPrice(bitcoinInfo?.quotes?.KRW.price)
      }, [bitcoinInfo])

    return (
        <View>
            <Text>{krwPrice}</Text>
        </View>
    )
};

export default MainContent;