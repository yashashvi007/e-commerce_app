import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View , Text, SafeAreaView, Platform } from 'react-native'

function Main() {
  return (
    <View style={{paddingVertical : Platform.OS === "android" ? StatusBar.currentHeight : 0}} >
        <SafeAreaView>
            <Text>Main</Text>
        </SafeAreaView>
    </View>
  )
}

export default Main