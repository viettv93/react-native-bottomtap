import React from "react"
import { View, Image, TextInput, ImageBackground, Text, TouchableOpacity } from "react-native"

const HearderOfHeader = () => {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 24, color: '#000000', fontWeight: '600' }}>Circle</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                    <Image 
                        source={require('../image/scan.png')}
                        resizeMode="contain" />
                    <Image 
                        source={require('../image/icon.png')}
                        resizeMode="contain" />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 20, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#FAFAFA', borderRadius: 20 }}>
                <Image
                    source={require('../image/union.png')}
                    resizeMode="contain"
                    style={{ marginLeft: 10 }} />
                <TextInput 
                    placeholder="Send the sample"
                    style={{  flex: 1 }} />
                <Image
                    source={require('../image/mic.png')}
                    resizeMode="contain"
                    style={{ marginRight: 10 }} />
            </View>
            <View>
                <ImageBackground source={require('../image/nen1.png')}
                    style={{ height: 200, justifyContent: 'center', paddingHorizontal: 20 , marginBottom: 20}}
                    resizeMode='stretch'>
                    <Text style={{ fontWeight: '500', fontSize: 20, color: '#000000' }}>How do you </Text>
                    <Text style={{ fontWeight: '500', fontSize: 20, color: '#000000' }}>create your circle?</Text>
                    <TouchableOpacity style={{ backgroundColor: '#000000', padding: 5, width: '20%', borderRadius: 8, marginTop: 20 , justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{ fontSize: 13, color: 'white'}}>create</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <Text style={{ fontWeight: '500', fontSize: 20, color: '#000000' }}>Popular circle</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{ fontWeight: '400', fontSize: 15, color: 'rgba(0, 0, 0, 0.4)' }}>More</Text>
            </View>
        </View>
    )
}

export default HearderOfHeader