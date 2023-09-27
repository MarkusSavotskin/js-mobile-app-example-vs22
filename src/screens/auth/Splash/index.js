import React from 'react';
import {Text, View, Image} from 'react-native';
import Button from '../../../components/Button/index.js';
import FooterText from '../../../components/FooterText/index.js';

import {styles} from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/splash_image.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find </Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title="Sign Up" />
      <FooterText title="Sign in" />
    </View>
  );
};

export default Splash;
