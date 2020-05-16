import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'


export default function BlogThumbnail({ image, title, author, timeread, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.navigate("BlogDetails",
        {image: image,
        title: title,
        author: author,
        timeread: timeread}
        )}}>
          
        <View style={styles.cardContainer}>
          <View style={styles.borderStyle}></View>
          <View>
            <Image source={image} style={{ height: 120, width: 80, borderColor: "white", borderWidth: 5 }} />
          </View>
          <View style={{ marginHorizontal: 15, flex: 1 }}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../../assets/profile-placeholder.png")} style={{ height: 20, width: 20, borderRadius: 70, marginRight: 8 }} />
              <Text numberOfLines={1} style={{ flex: 1, flexWrap: "wrap" }}>{author}</Text>
              <Entypo name="dot-single" size={18} style={{ color: "#858585" }} />
              <Text style={{ color: "#858585" }}>{timeread}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3"
  },
  cardContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 7,
    backgroundColor: "#fff",
    height: 150,
    padding: 15,
  },
  borderStyle: {
    backgroundColor: "#41588a",
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 80,
    opacity: 0.4
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    flexWrap: "wrap",
    flexShrink: 1
  }
})
