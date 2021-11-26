import React from "react";

import { StatusBar } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import EntypoIcons from "react-native-vector-icons/Entypo";
import FeatherIcons from "react-native-vector-icons/Feather";
import AntDesignIcons from "react-native-vector-icons/AntDesign";

import HomeScreen from "./screens/Home";
import FeedScreen from "./screens/Feed";

import Button from "./components/Button";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            backgroundColor: "#000",
            borderTopColor: "rgba(255,255,255,0.3)",
          },
          tabBarActiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Home"
          component={FeedScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <EntypoIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FeatherIcons name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="New"
          component={HomeScreen}
          options={{
            title: "",
            tabBarIcon: ({ size, color }) => <Button />,
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <EntypoIcons name="chat" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntDesignIcons name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>

      <StatusBar
        animated={true}
        backgroundColor="#000"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
    </NavigationContainer>
  );
}
