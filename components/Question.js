import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Question ({question}) {
    return (
        <View style={styles.wrapper}>
            <Text>
                {question.question}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})

export default Question