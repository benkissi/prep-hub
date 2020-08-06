import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import OptionItem from '../../components/Option-Item'
import CatOptions from '../../constants/category-options'

function Options () {
    const [options, setOptions] = useState([])
    useEffect(() => {
        setOptions(CatOptions)
    }, [])

    return (
        <View style={styles.wrapper}>
            {
                options.map((optionList) => {
                    <OptionItem list={optionList} />
                })
            }
           
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10,
    }
})

export default Options