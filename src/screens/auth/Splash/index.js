import React, {useContext} from 'react';
import {Text, View, Image} from 'react-native';
import Button from '../../../components/Button';
import FooterText from '../../../components/FooterText/index.js';
import {UserContext} from '../../../../App';

import {styles} from './styles';

const Splash = ({navigation}) => {
  const user = useContext(UserContext);
  console.log('user => ', user)

  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onSignIn = () => {
    navigation.navigate('Signin');
  };

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

      <Button
        style={{flex: 0, width: '100%'}}
        onPress={onSignUp}
        title="Sign Up"
      />

      <FooterText onPress={onSignIn} title="Sign in" />
    </View>
  );
};

export default Splash;
