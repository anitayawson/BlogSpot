import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Entypo, Ionicons, FontAwesome5, Feather, AntDesign } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'


export default function BlogDetails({ route, navigation }) {
    const { image, title, author, timeread } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.backgrouondSquare}></View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("AllBlogs")
                }}>
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="ios-arrow-back" size={40} />
                        <Text style={{ fontSize: 20, alignSelf: "center" }}>  Home</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.topIcons}>
                    <Feather name="headphones" size={30} style={{ marginRight: 10 }} />
                    <Entypo name="heart-outlined" size={30} style={{ marginRight: 10 }} />
                    <Feather name="share-2" size={30} style={{ marginRight: 10 }} />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
                <View>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={{paddingHorizontal: 10, backgroundColor: "white"}}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../../assets/profile-placeholder.png")} style={{ height: 20, width: 20, borderRadius: 70, marginRight: 8 }} />
                        <Text style={styles.author}>{author}</Text>
                        <Entypo name="dot-single" size={18} style={{ color: "#858585" }} />
                        <Text style={{ color: "#858585" }}>{timeread}</Text>
                    </View>
                    <View style={styles.text}>
                        <Text style={{ marginBottom: 15, color: "#666666" }}> Do et nulla voluptate culpa et enim ullamco eu in. Amet consequat sit reprehenderit nulla cupidatat ea ut velit.
                        Voluptate nulla ad proident esse eiusmod laboris nisi officia commodo excepteur veniam.
                </Text>
                        <Text style={{ marginBottom: 15, color: "#666666" }}>
                            Anim nostrud dolor pariatur dolor cillum ullamco elit et proident veniam proident id ullamco velit.
                            Eiusmod ullamco consectetur tempor proident. Sint nostrud ea velit aliqua consectetur dolore in laboris aliquip ea ea sint laboris Lorem.
                            Do et nulla voluptate culpa et enim ullamco eu in. Amet consequat sit reprehenderit nulla cupidatat ea ut velit.
                            Voluptate nulla ad proident esse eiusmod laboris nisi officia commodo excepteur veniam.
                </Text>
                        <Text style={{ marginBottom: 15, color: "#666666" }}>
                            Anim nostrud dolor pariatur dolor cillum ullamco elit et proident veniam proident id ullamco velit.
                            Eiusmod ullamco consectetur tempor proident. Sint nostrud ea velit aliqua consectetur dolore in laboris aliquip ea ea sint laboris Lorem.
                            Do et nulla voluptate culpa et enim ullamco eu in. Amet consequat sit reprehenderit nulla cupidatat ea ut velit.
                            Voluptate nulla ad proident esse eiusmod laboris nisi officia commodo excepteur veniam.
                            Anim nostrud dolor pariatur dolor cillum ullamco elit et proident veniam proident id ullamco velit.
                            Eiusmod ullamco consectetur tempor proident. Sint nostrud ea velit aliqua consectetur dolore in laboris aliquip ea ea sint laboris Lorem.
                     </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
    },
    backgrouondSquare: {
        position: "absolute",
        top: 0,
        height: 280,
        width: 220,
        backgroundColor: "#41588a",
        opacity: 0.4
    },
    header: {
        flexDirection: "row",
        marginTop: 45,
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    topIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 150
    },
    contentContainer: {
        marginHorizontal: 25,
    },
    image: {
        height: 300,
        width: 320,
        alignSelf: "center",
        marginTop: 10,
        borderColor: "white", 
        borderWidth: 15
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 20
    },
    author: {
        marginBottom: 30
    },
    text: {
        marginBottom: 40,
    }
})