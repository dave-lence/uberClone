import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigators from './DrawerNavigators'

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <DrawerNavigators/>
    </NavigationContainer>
  )
}

export default RootNavigator