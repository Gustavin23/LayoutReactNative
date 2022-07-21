import { ScrollView, Text, View, Image } from "react-native";
import { global } from "../../css/Styles.js";

export default function Stories(){
    return(
        <View>
            <Text style={global.titlestories}> Stories </Text>

            <ScrollView horizontal={true}>
                <View>
                    <View style={global.atividades}>
                        <Text style={global.tag}> Live </Text>
                        <Text style={global.like}> 20.5k </Text>
                    </View>
                    <Image source={require("../../assets/daddy.jpg")} style={global.imgstories} />
                    <Text style={global.username}> Daddy Rei Delas <Image source={require("../../assets/check.png")} style={global.imgcheck}/> </Text>
                </View>

                <View>
                    <View style={global.atividades}>
                        <Text style={global.tag}> Exclusivo </Text>
                        <Text style={global.like}> 1.2M </Text>
                    </View>
                    <Image source={require("../../assets/poze.jpg")} style={global.imgstories} />
                    <Text style={global.username}> MC Poze <Image source={require("../../assets/check.png")} style={global.imgcheck}/> </Text>
                </View>
                <View>
                    <View style={global.atividades}>
                        <Text style={global.tag}> Live </Text>
                        <Text style={global.like}> 80k </Text>
                    </View>
                    <Image source={require("../../assets/tue.jpg")} style={global.imgstories} />
                    <Text style={global.username}> Tue <Image source={require("../../assets/check.png")} style={global.imgcheck}/> </Text>
                </View>
                <View>
                    <View style={global.atividades}>
                        <Text style={global.tag}> Live </Text>
                        <Text style={global.like}> 100k </Text>
                    </View>
                    <Image source={require("../../assets/sidoka.jpg")} style={global.imgstories} />
                    <Text style={global.username}> DOKA <Image source={require("../../assets/check.png")} style={global.imgcheck}/> </Text>
                </View>            
            </ScrollView>
        </View>
    );
}