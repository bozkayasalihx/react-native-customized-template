import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '@/Hooks'

interface SettingsContainerProps {}

const SettingsContainer: FC<SettingsContainerProps> = ({}) => {
  const { Colors } = useTheme()
  return (
    <View style={[Colors.primary]}>
      <Text>salih is best</Text>
    </View>
  )
}
export default SettingsContainer
