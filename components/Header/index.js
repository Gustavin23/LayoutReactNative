import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Header(){
    return(
        <View style={global.header}>
            
        <Image source={require("../../assets/igu.jpg")} style={global.iguimg} />
        <View>
            <Text style={global.nameheader}> É o igão </Text>
            <Text style={global.nicknameheader}> @igaodojapao </Text>
        </View>
        <Image source={require("../../assets/search.png")} style={global.searchimg} />

        </View>
    );
}