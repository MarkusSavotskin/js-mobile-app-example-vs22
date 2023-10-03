import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { styles } from './styles'

const GoogleLogin = () => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image source style={styles.image} source={require('../../assets/Google.png')}/>
        </TouchableOpacity>
    )
}
export default React.memo(GoogleLogin)