import React, { useState } from 'react';
import {Pressable, Image, Text, View} from 'react-native';
import {styles} from './styles.js';
import Input from '../Input/index.js';


const Header = ({title, onBackPress, OnSearch, OnLogout, showBack, showSearch, showLogout, onSearchKeyword, keyword}) => {
    const [showSearchInput, setShowSearchInput] = useState(false)

    const onSearch = () => {
        setShowSearchInput(search => !search)
    }
    return (
        <View>
        <View style={styles.container}>
            { showBack ? (
                <Pressable hitSlop={20} onPress={onBackPress}>
                    <Image style={styles.icon} source={require('../../assets/back.png')}/>
                </Pressable>
            ) : showSearch ? (
                <Pressable hitSlop={20} onPress={onSearch}>
                    <Image style={styles.icon} source={require('../../assets/search.png')}/>
                </Pressable>
            ) : null
            }
            <Text style={styles.title}>{title}</Text>
            { showLogout ? (
                    <Pressable hitSlop={20} onPress={OnLogout}>
                        <Image style={styles.icon} source={require('../../assets/logout.png')}/>
                    </Pressable>
                ) : <View style={styles.space}/>
            }
            </View>
            {
                showSearchInput ? (
                    <Input onChangeText={onSearchKeyword} value={keyword} placeholder='Type your keyword'/>
                ) :  null
            }
        </View>
    )
}
export default React.memo(Header)