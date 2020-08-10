import  React, {useState, useEffect, useCallback} from 'react'
import { useFocusEffect } from "@react-navigation/native";
import {View, Text, StyleSheet} from 'react-native'
import {secondsToHms} from '../utils'

function Timer ({total, listener}) {
    const [seconds, setSeconds] = useState(total)
    let timerInterval

    useFocusEffect(
        useCallback(() => {
            timerInterval = setInterval(() => {
                setSeconds((prevState) => prevState - 1)
            }, 1000)
    
            return () => clearInterval(timerInterval)
        }, [])
      );

    useEffect(() => {
        listener(seconds)
    }, [seconds])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.time}>{secondsToHms(seconds)} left</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wraper: {
        width: 10
    },
    time: {
        fontSize: 15,
        fontFamily: "Raleway_700Bold",
        color: "#1a1e2c"
    }
})

export default Timer