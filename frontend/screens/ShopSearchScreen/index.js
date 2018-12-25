import React from "react";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { AsyncStorage, StyleSheet, View, Button, TouchableOpacity, ScrollView } from "react-native";

// data: [
//     {id:1, title: "브롱스 연남점",                  time:"1 days a go",    image:"http://www.pubbronx.com/files/attach/images/189/070/001/bb5775aa30444cdf6d10bfa31234adc2.jpg"},
//     {id:2, title: "크래프트한스 이태원점",             time:"2 minutes a go", image:"http://mblogthumb4.phinf.naver.net/20160505_39/ahn_dae_won_1462421816573SUcyc_JPEG/P20160504_194930000_3D58CCD7-7D30-47AE-9739-1F44A60E83B8.JPG?type=w800"},
//     {id:3, title: "blue55",            time:"3 hour a go",    image:"https://t1.daumcdn.net/cfile/tistory/245798505680E42E18"}, 
//     {id:4, title: "봉구비어 신촌점",         time:"4 months a go",  image:"http://www.kpinews.co.kr/news/photo/201802/67530_39625_4536.jpg"}, 
//   ]

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>

                    <Card>
                        <CardImage
                            source={{ uri: 'http://www.pubbronx.com/files/attach/images/189/070/001/bb5775aa30444cdf6d10bfa31234adc2.jpg' }}
                            title="브롱스 연남점"
                        />
                        <CardTitle
                            subtitle="나의 단골집"
                        />
                        <CardContent text="Clifton, Western Cape" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Favorite"
                                color="#FEB557"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Review"
                                color="#FEB557"
                            />
                        </CardAction>
                    </Card>

                    <Card>
                        <CardImage
                            source={{ uri: 'http://mblogthumb4.phinf.naver.net/20160505_39/ahn_dae_won_1462421816573SUcyc_JPEG/P20160504_194930000_3D58CCD7-7D30-47AE-9739-1F44A60E83B8.JPG?type=w800' }}
                            title="크래프트한스 이태원점"
                        />
                        <CardTitle
                            subtitle="Number 6"
                        />
                        <CardContent text="Clifton, Western Cape" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Share"
                                color="#FEB557"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Explore"
                                color="#FEB557"
                            />
                        </CardAction>
                    </Card>

                    <Card>
                        <CardImage
                            source={{ uri: 'http://www.kpinews.co.kr/news/photo/201802/67530_39625_4536.jpg' }}
                            title="봉구비어 신촌점"
                        />
                        <CardTitle
                            subtitle="Number 6"
                        />
                        <CardContent text="Clifton, Western Cape" />
                        <CardAction
                            separator={true}
                            inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Share"
                                color="#FEB557"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Explore"
                                color="#FEB557"
                            />
                        </CardAction>
                    </Card>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});

export default App;
