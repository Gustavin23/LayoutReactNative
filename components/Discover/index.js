import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Discover(){
    return(
        <View>
            <View style={global.trendingarea}>
                <Text style={global.titletrending}> Discover </Text>
                <Text style={global.txtmore}> More -&gt; </Text>
            </View>
            <View style={global.imgesporte}>
                <Image source={require("../../assets/toguro.png")} style={global.imgtrending}/>
                <View style={global.boxlike}>
                    <Image source={require("../../assets/gostei.png")} style={global.imglike}/>
                    <Text style={global.txtlike}> Like </Text>
                </View>
                <View style={global.boxuser}>
                    <Image source={require("../../assets/toguro2.jpg")} style={global.imguser1}/>
                    <View style={global.boxname}>
                        <Text style={{color:"white", fontSize:15, paddingTop: 23}}> Toguro </Text>
                        <Text style={{color:"white", fontSize:15}}> 2 min ago </Text>
                    </View>
                   
                </View>
                <Text style={{ color:"white", fontSize:14, textAlign: "center" }}>
                        Estão querendo acabar com o nosso projetinho felas 🤬🤬🤬🤬 essa mídia não vai acabar com a gente eu e meu amor estaremos juntos para sempre </Text>
            </View>
        </View>
    );
}