import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 8,
        width: '100%'        
    },
    title: {
        color: colors.blue,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})