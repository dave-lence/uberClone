import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./StackNavigators";
import { Icon } from "@rneui/base";
import { colors } from "../global/styles";

const Drawer = createDrawerNavigator();
const DrawerNavigators = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="material-community"
              name={focused ? "home" : "home-outline"}
              color={focused ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigators;
