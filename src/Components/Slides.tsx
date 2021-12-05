import { useTheme } from '@/Hooks'
import { Props } from '@/types'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Slices: React.FC<Props> = ({ navigation, route }) => {
  const { Layout, Gutters } = useTheme()
  return (
    <View>
      <Text>Slides</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Categories', { title: 'google' })
        }}
        style={[Layout.center, Gutters.smallBottomMargin]}
      >
        <Text> click me </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Slices
