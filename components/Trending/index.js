import { Image, Text, View } from "react-native";

export default function Trending(){
    return(
        <View>
            <View style={global.trendingarea}>
                <Text style={global.titletrending}> Trending </Text>
                <Text style={global.txtmore}> More -&gt; </Text>
            </View>
            <View style={global.imgesporte}>
                <Image source={require("../../assets/mcgorila.jpg")} style={global.imgtrending}/>
                <View style={global.boxlike}>
                    <Image source={require("../../assets/like.png")} style={global.imglike}/>
                    <Text style={global.txtlike}> Like </Text>
                </View>
                <View style={global.boxuser}>
                    <Image source={require("../../assets/gorila.jpg")} style={global.imguser1}/>
                    <View style={global.boxname}>
                        <Text style={{color:"white", fontSize:20}}> MCGorila </Text>
                        <Text style={{color:"white", fontSize:20}}> 2 min ago </Text>
                    </View>

                    <Text style={{ color:"white", fontSize:14}}>
                        Salve salve minha familia agradecer aqui ao meu mano @gustavin_11 por essa montagem de capa pro meu próximo álbum. E jamais se esqueçam "Não ame".</Text>
                   
                </View>
            </View>
        </View>
    );
}