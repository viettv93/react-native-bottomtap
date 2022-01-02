import React from "react"
import { View, Image, Text, FlatList } from 'react-native'
import HearderOfHeader from "./HearderOfHeader"

const array = [
    { image: require('../image/ava1.png'), name: 'Golden retriever' },
    { image: require('../image/ava2.png'), name: 'Back of the head' },
    { image: require('../image/ava3.png'), name: 'Adopt' },
    { image: require('../image/ava1.png'), name: 'Khanh' },
    { image: require('../image/ava2.png'), name: 'Tung' }]
const Hearder = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginRight: 10, alignItems: 'center' }}>
                <Image
                    source={item.image}
                    resizeMode="contain" />
                <Text style={{ color: 'rgba(0, 0, 0, 0.7)', fontSize: 13, fontWeight: '400' }}>{item.name}</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
            <HearderOfHeader />
            <FlatList
                data={array}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                horizontal={true}
            />
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontWeight: '500', fontSize: 20, color: '#000000' }}>The circle to join</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{ fontWeight: '400', fontSize: 15, color: 'rgba(0, 0, 0, 0.4)' }}>More</Text>
            </View>
        </View>
    )
}

export default Hearder