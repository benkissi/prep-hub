import  React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

function SetQuestions () {
    return (
        <View>
            <Text>Set questions</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        flex: 1
    }
})

export default SetQuestions
