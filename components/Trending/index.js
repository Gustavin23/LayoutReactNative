import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Trending(){
    return(
        <View>
            <View style={global.trendingarea}>
                <Text style={global.titletrending}> Trending </Text>
                <Text style={global.txtmore}> More -&gt; </Text>
            </View>
            <View style={global.imgesporte}>
                <Image source={require("../../assets/gorila.jpg")} style={global.imgtrending}/>
                <View style={global.boxlike}>
                    <Image source={require("../../assets/gostei.png")} style={global.imglike}/>
                    <Text style={global.txtlike}> Like </Text>
                </View>
                <View style={global.boxuser}>
                    <Image source={require("../../assets/mcgorila.jpg")} style={global.imguser1}/>
                    <View style={global.boxname}>
                        <Text style={{color:"white", fontSize:15, paddingTop: 23}}> MCGorila </Text>
                        <Text style={{color:"white", fontSize:15}}> 2 min ago </Text>
                    </View>
                   
                </View>
                <Text style={{ color:"white", fontSize:14, textAlign: "center" }}>
                        Salve salve minha familia agradecer aqui ao meu mano @gustavin_11 por criar esse css utilizando React Native. E jamais se esqueçam "Não ame".</Text>

            </View>
        </View>
    );
}