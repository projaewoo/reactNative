import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TopBar = (props) => {
    const { setClickedMenu } = props;
    const { top } = useSafeAreaInsets();

    const [topBar, setTopBar] = useState(['BTC', 'XRP', 'JUV']);

    return (
        <View style={[ 
            styles.topBar,
            { paddingTop: top + 10 }
        ]}>
            {topBar.map((menu, index) => (
                <TouchableOpacity 
                    key={index}
                    style={ styles.menuBox } 
                    onPress={(e) => console.log(e.target.valueOf())}
                >
                    <Text>{menu}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row'
    },
    menuBox: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center'
    }
})

export default TopBar;