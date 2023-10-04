import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 56,
        marginBottom: 50
    },
    image: {
        width: 30,
        height: 30
    }
})