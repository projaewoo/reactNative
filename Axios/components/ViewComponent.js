import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';

const ViewComponent = (props) => {
    const axios = require('axios');
    const { top } = useSafeAreaInsets();

    const getBreeds = async () => {
        try {
          return await axios.get('https://dog.ceo/api/breeds/list/all');
        } catch (error) {
          console.error(error);
        }
      };

      const countBreeds = () => {
        const breeds = getBreeds()
            .then(response => {
            // if (response.data.message) {
            //   console.log(`현재 강아지의 수는 ${Object.entries(breeds.data.message).length}입니다.`);
            // }
                if (response) {
                    console.log(response.data)
                }
            })
            .catch(error => {
            console.log(error);
            })
      };

      useEffect(() => {
          console.log(countBreeds())
      }, [])


    return (
        <View style={{ paddingTop: top }}>
            <Text>
            </Text>
        </View>
    );
}

export default ViewComponent;