import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import { TabParamList } from '@/types/paramLists'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator<TabParamList>()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ExampleContainer}
        options={() => ({
          tabBarIcon: ({ color, focused, size }) => (
            <Icon name="rocket" size={30} color={color} />
          ),
        })}
      />
      <Tab.Screen name="Settings" component={ExampleContainer} />
    </Tab.Navigator>
  )
}

export default MainNavigator
