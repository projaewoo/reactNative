import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Platform, TouchableNativeFeedback, Keyboard } from 'react-native';

const AddTodo = () => {
    const [text, setText] = useState('');

    const onPress = () => {
        setText('');
        Keyboard.dismiss();     // 현재 나타난 키보드 닫기
    }

    const plusButton = () => {
        return (
            Platform.select({
                ios: (
                    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>{button}</TouchableOpacity>
                ),
                android: (
                    <View style={styles.circleWrapper}>
                        <TouchableNativeFeedback onPress={onPress}>{button}</TouchableNativeFeedback>
                    </View>
                )
            })
        );
    }

    const button = (
        <View style={styles.buttonStyle}>
            <Image source={require('../assets/icons/add_white/add_white.png')} />
        </View>
    )

    return (
        <View style={styles.block}>
            <TextInput 
                placeholder='할 일을 입력하세요.' 
                style={styles.input}
                value={text}
                onChangeText={setText}
                onSubmitEditing={onPress}           // 'Enter 눌렀을 때, 호출되는 함수'
                returnKeyType='done'
            />
            {plusButton()}
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 64,
        paddingHorizontal: 16,          // paddingLeft: 16, paddingRight: 16
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    input: {
        flex :1, 
        fontSize: 16,
        paddingVertical: 8              // paddingTop: 8, paddingBottom: 8
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height : 48,
        backgroundColor: '#26a69a',
        borderRadius: 24,
    },
    circleWrapper: {
        overflow: 'hidden',
        borderRadius: 24,
    }
});

export default AddTodo;