import React from 'react';
import {View, Text, ScrollView, Image, Pressable, Linking} from 'react-native';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import ImageCarusel from '../../../components/ImageCarusel';

const ProductDetails = ({navigation, route}) => {
  const {product} = route.params || {};

  const onBackPress = () => {
    navigation.goBack()
  }

  const onContact = () => {
    let phone = 'real phone number'
    Linking.openURL(`tel:${phone}`)
    
    let email = 'real email'
    Linking.openURL(`mailto:${email}`)
  }

  return (
    <SafeAreaView style={styles.save}>
      <ScrollView>
      {product?.images?.length ? (
        <ImageCarusel images={product?.images}/>
      ) : (
        <Image style={styles.image} source={{uri: product?.image}} />
      )}
        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={onBackPress} style={styles.backContainer}>
            <Image style={styles.backIcon} source={require('../../../assets/back.png')}/>
      </Pressable>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
            <Image style={styles.bookmarkIcon} source={require('../../../assets/tabs/bookmark.png')}/>
        </Pressable>
        <Button style={{width: '70%'}} onPress={onContact} title='Contact Seller'/>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(ProductDetails);
