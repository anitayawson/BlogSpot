import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Fontisto, Ionicons } from '@expo/vector-icons'

import AllBlogs from './src/screens/AllBlogs'
import BlogDetails from './src/screens/BlogDetails'
import BlogThumbnail from './src/components/BlogThumbnail'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen options={{
          headerStyle: { height: 100 }, title: "Discover", headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
          headerTintColor: "#424242",
          headerLeft: () => (<TouchableOpacity><Fontisto name="nav-icon-grid-a" style={{ marginLeft: 15 }} size={25}/></TouchableOpacity>),
          headerRight: () => (<TouchableOpacity><Ionicons name="ios-search" style={{ marginRight: 15 }} size={28}/></TouchableOpacity>)
        }}
          name="AllBlogs" component={AllBlogs} />
        <Stack.Screen name="BlogThumbnail" component={BlogThumbnail} options={{headerShown: false}} />
        <Stack.Screen name="BlogDetails" component={BlogDetails} options={{headerShown: false}} />
      </Stack.Navigator>

    </NavigationContainer>
    // <AllBlogs/>
    // <BlogID1/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
