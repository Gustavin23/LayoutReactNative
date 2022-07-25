import reactDom from "react-dom";
import { StyleSheet } from "react-native";


export const global = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#090909",
    },
    header: {
        padding: 10,
        height: 200,
        flexDirection: "row",
    },
    txtHeader: {
        color: "#fff",
        fontSize: 40,
        padding: 20,
    },
    iguimg: {
        height: 50,
        width: 50,
        borderRadius: 100,
        marginTop: 20,
        marginLeft: 10,
    },
    nameheader: {
        fontSize: 14,
        color: "#fff",
        paddingTop: 30,
        marginLeft: 10,
    },
    nicknameheader: {
        fontSize: 12,
        color: "#dddd",
        marginLeft: 10,
    },
    searchimg: {
        height: 40,
        width: 40,
        marginTop: 32,
        position: "absolute",
        right: 10,
    },
    titlestories: {
        color: "#FFF",
        fontSize: 20,
        marginTop: -100,
        marginLeft: 20,
        paddingBottom: 10,
        
    },
    imgstories: {
        height:300,
        width:150,
        resizeMode: "cover",
        margin: 1,
        borderRadius: 10,
        marginLeft: 10,
    },
    tag: {
        padding: 10,
        borderWidth : 1,
        color: "white",
        borderRadius: 15,
        textAlign: "center",
        backgroundColor: "black",
    },
    like: {
        color: "white",
        textAlign: "center",
        padding: 10,
        textShadowColor: "#090909",
        textShadowOffset: {width: 1, height:1},
        textShadowRadius: 1,
        textShadowOpacity: 0.5,
    },
    atividades: {
        flexDirection: "row",
        position: "absolute",
        zIndex: 1000,
        marginLeft: 15,
    },
    username: {
        color: "white",
        padding: 5,
    },
    imgcheck: {
        width: 15,
        height: 15,
        marginTop: -7,
    },
    trendingarea: {
        backgroundColor: "#090909",
        flexDirection: "row",
        flex: 1,
        top: 20,
    },
    titletrending: {
        color: "#FFF",
        fontSize: 20,
        marginLeft: 20,
        FontWeight: "bold",
    },
    txtmore: {
        color: "yellow",
        position: "absolute",
        fontSize: 15,
        marginLeft: 291,
        paddingTop: 5,
    },
    imgesporte: {
        backgroundColor: "#333",
        padding: 15,
        width: "95%",
        borderRadius: 40,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 40,
        paddingTop: 17,
        
    },
    imgtrending: {
        width: "100%",
        height: 300,
        borderRadius: 30,
    },
    boxlike: {
        backgroundColor: "white",
        padding: 5,
        width: 80,
        flexDirection: "row",
        position: "absolute",
        top: 281.8,
        right: 15.5,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 10,
    },
    imglike: {
        width: 25,
        height: 25,
        
    },
    txtlike: {
        marginTop: 5,
        marginLeft: 2,
    },
    boxuser: {
        flexDirection: "row",
    },
    imguser1: {
        width: 70,
        height: 70,
        margin: 5,
        borderRadius: 100,
    }

});

