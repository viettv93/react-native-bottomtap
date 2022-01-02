import React from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import Hearder from "./Hearder"

 const array = [
    { image: require('../image/ava4.png'), name: 'I love Golden Retriever', member: '548 Members' },
    { image: require('../image/ava5.png'), name: 'The life of a dog king', member: '6886 Members' },
    { image: require('../image/ava4.png'), name: 'Khanh  Cho va team', member: '2 Members' },
    { image: require('../image/ava5.png'), name: 'Tung va anh em Yen Bai', member: ' 3 Members' }]
const Screen2 = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row' , paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center'}}>
                <View style={{flex: 1}}>
                <Image source={item.image}
                    resizeMode="contain" />
                </View>
                
                <View style={{flex: 3}}>
                    <Text style={{fontWeight: '500', fontSize: 20, color: '#000000' , marginBottom: 10}}> {item.name} </Text>
                    <Text style={{fontWeight: '400', fontSize: 15, color: 'rgba(0, 0, 0, 0.4)'}}> {item.member} </Text>
                </View>
                <View style={{flex: 1}}>
                <TouchableOpacity
                    onPress={()=>{}}
                    style={{backgroundColor: '#FA6650', borderRadius: 5,height: 35, padding: 3, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color: 'white', fontSize: 13, fontWeight: '400'}}>Joined</Text>
                </TouchableOpacity>
                </View>
                
            </View>
        )
    }
    return (
        <View style={{ flex: 1, paddingHorizontal: 7, paddingTop: 10 , backgroundColor : 'white'}}>
            <FlatList ListHeaderComponent={<Hearder />}
                data={array}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} />
        </View >
    )
}

export default Screen2