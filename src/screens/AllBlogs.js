import React, { Component } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import BlogThumbnail from "../components/BlogThumbnail"
import { AntDesign, Entypo, Feather } from '@expo/vector-icons'


export default class AllBlogs extends Component {

    render() {
        const blogs = [
            { id: 1, image: require("../../assets/maturity.jpg"), title: "Does Maturity Indeed Come With Age?", author: "Anita Yawson", timeread: "6 min read" },
            { id: 2, image: require("../../assets/questions.jpg"), title: "What Happened To Asante Kotoko?", author: "Kelvin Ankrah", timeread: "4 min read" },
            { id: 5, image: require("../../assets/protectstyle.jpg"), title: "Protective Styles Are Not So Protective", author: "Abena Amponsa Kwakwa", timeread: "5 min read" },
            { id: 4, image: require("../../assets/feminism.jpg"), title: "Is Feminism Really For The Black Woman?", author: "Marjorie Tetteh", timeread: "6 min read" },
            { id: 3, image: require("../../assets/africa.jpg"), title: "How Can Africa Become a Powerhouse?", author: "Nana Addo", timeread: "4 min read" },
        ]
        let {navigation} = this.props
        return (
            <View>
            <ScrollView>
                <FlatList showsVerticalScrollIndicator={false}
                    data={blogs}
                    renderItem={({ item }) => {
                        return <BlogThumbnail navigation={navigation} image={item.image} title={item.title} author={item.author} timeread={item.timeread} />
                    }}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
            <View style={styles.menubar}>
                <TouchableOpacity><AntDesign name="home" size={24} color="red" /></TouchableOpacity>
                <TouchableOpacity><AntDesign name="folderopen" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity><Entypo name="heart-outlined" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity><AntDesign name="user" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity><Feather name="settings" size={24} color="black" /></TouchableOpacity>
            </View>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    menubar: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 20,
        position: "absolute",
        bottom: 0,
        width: '100%',
        justifyContent: "space-between",
        backgroundColor: "white"
    }
})