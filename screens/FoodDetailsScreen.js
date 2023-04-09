import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { HeartIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

export default function FoodDetailsScreen(props) {
    let item = props.route.params;
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <Image style={{borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} source={require('../assets/images/background.png')}
        blurRadius={40} className="h-96 w-full absolute" />
        <SafeAreaView>
            <View className="flex-row justify-between mx-4 items-center">
                <TouchableOpacity onPress={()=> navigation.goBack()} className="bg-white rounded-2xl p-3 shadow">
                    <ChevronLeftIcon size="23" stroke={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white rounded-2xl p-3 shadow">
                    <HeartIcon size="23" color="black" />
                </TouchableOpacity>
            </View>
            <View className="flex justify-center items-center">
                <Image className="h-48 w-48" source={item.image} />
                <Text className="text-3xl text-white"> {item.name}</Text>
            </View>
            <View className="flex-row justify-center items-center mt-6">
                <View className="flex-row justify-between items-center bg-gray-100 rounded-2xl space-x-3">
                    <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
                        <MinusIcon size="20" strokeWidth={1.8} color="black" />
                    </TouchableOpacity>
                    <Text className="text-xl">1</Text>
                    <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
                        <PlusIcon size="20" strokeWidth={1.8} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                className="flex-row justify-between items-center mx-4 h-20 overflow-hidden"
            > 
                <Animatable.View 
                    delay={180}
                    animation="slideInDown"
                    className="flex items-center space-y-2">
                    <Image source={require('../assets/icons/calories.png')} className="h-6 w-6"/>
                    <Text className="font-semibold">130 cal</Text>
                </Animatable.View>
                <Animatable.View 
                    delay={280}
                    animation="slideInDown"
                    className="flex items-center space-y-2">
                    <Image source={require('../assets/icons/clock.png')} className="h-6 w-6"/>
                    <Text className="font-semibold">15-20 min</Text>
                </Animatable.View>
                <Animatable.View 
                    delay={380}
                    animation="slideInDown"
                    className="flex items-center space-y-2">
                    <Image source={require('../assets/icons/chat.png')} className="h-6 w-6"/>
                    <Text className="font-semibold">4.6 vote</Text>
                </Animatable.View>
                <Animatable.View 
                    delay={480}
                    animation="slideInDown"
                    className="flex items-center space-y-2">
                    <Image source={require('../assets/icons/weight.png')} className="h-6 w-6"/>
                    <Text className="font-semibold">350 g</Text>
                </Animatable.View>
            </View>
            <View className="mx-4 mt-6 space-y-3 h-60">
                <Animatable.Text
                animation="slideInUp"
                 className="text-3xl font-semibold text-gray-800">
                    Description
                </Animatable.Text>
                <Animatable.Text
                delay={100} animation="slideInUp"
                 className="text-gray-600 tracking-wider">{item.desc}</Animatable.Text>
            </View>
            {/* add to cart button */}
            <View className="mx-4 flex-row justify-between items-center">
                <Animatable.Text delay={100} animation="slideInLeft" className="text-3xl font-semibold text-gray-800">
                    ${item.price}
                </Animatable.Text>
                <Animatable.View delay={100} animation="slideInRight">
                    <TouchableOpacity className="bg-gray-800 p-4 px-14 rounded-2xl">
                        <Text className="text-white text-xl font-semibold">Add to Cart</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </SafeAreaView>
    </View>
  )
}

