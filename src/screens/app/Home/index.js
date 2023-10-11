import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import {products} from '../../../data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [selectedProducts, setSelectedProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updateSelectedProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setSelectedProducts(updateSelectedProducts);
    } else if (selectedCategory && keyword) {
      const updateSelectedProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title
            ?.toLocaleLowerCase()
            .includes(keyword.toLocaleLowerCase()),
      );
      setSelectedProducts(updateSelectedProducts);
    } else if (!selectedCategory && keyword) {
      const updateSelectedProducts = products.filter(product =>
        product?.title?.toLowerCase().includes(keyword.toLowerCase()),
      );
      setSelectedProducts(updateSelectedProducts);
    } else if (!keyword && !selectedCategory) {
      setSelectedProducts(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({item}) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item.id)}
        isSelected={item.id === selectedCategory}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  const renderProductItem = ({item}) => {
    const onProductPress = product => {
      navigation.navigate('ProductDetails', {product});
    };
    return <ProductHomeItem onPress={() => onProductPress(item)} {...item} />;
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          onSearchKeyword={setKeyword}
          keyword={keyword}
          showSearch={true}
          title="Find All You Need"
        />
        <FlatList
          style={styles.list}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />
        <FlatList
          numColumns={2}
          style={styles.list}
          data={selectedProducts}
          renderItem={renderProductItem}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={<View style={{height: 300}} />}
        />
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(Home);
