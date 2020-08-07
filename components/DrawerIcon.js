import  React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 

function DrawerIcon ({navigation}) {
    return (
        <View style={styles.wrapper}>
            <MaterialIcons name="menu" size={24} color="black" onPress={() => navigation.toggleDrawer()}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        paddingHorizontal: 10
    }
})

export default DrawerIcon