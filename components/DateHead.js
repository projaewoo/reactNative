import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DateHead = (props) => {
    const { date } = props;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const { top } = useSafeAreaInsets();

    console.log(top);

    return (
        <>
            <View style={[ 
                styles.statusBarPlaceholder,
                { paddingTop: top }
                ]}>
                    <StatusBar 
                        backgroundColor='#26a69a'
                        barStyle='light-content'
                    />
                    <View style={styles.block}>
                        <Text style={styles.dateText}>
                            {year}년 {month}월 {day}일
                        </Text>
                    </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    statusBarPlaceholder: {
        backgroundColor: '#26a69a',
    },
    block: {
        padding: 16,
        backgroundColor: '#26a69a',
    },
    dateText: {
        fontSize: 24,
        color: 'white'
    },
});

export default DateHead;