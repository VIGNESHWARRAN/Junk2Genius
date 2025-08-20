import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

function HomePage() {
  return (
    <ScrollView className="flex-1 bg-green-50 px-4 pt-10">
      {/* Header */}
      <View className="items-center mb-6">
        <Image
          source={require('../../../assets/images/clean_earth_logo.jpeg')}
          className="w-20 h-20 mb-2"
          resizeMode="contain"
        />
        <Text className="text-3xl font-bold text-green-700">Clean Earth</Text>
        <Text className="text-base text-green-600 text-center mt-1">
          Let’s make our city clean, green, and smart!
        </Text>
      </View>

      {/* Action Buttons */}
      <View className="flex-row justify-between mb-6">
        <TouchableOpacity className="flex-1 bg-white rounded-xl p-4 items-center mx-1 shadow-md">
          <Image
            source={require('../../../assets/images/upload_icon.png')}
            className="w-9 h-9 mb-2"
            resizeMode="contain"
          />
          <Text className="text-green-700 font-bold">Upload Waste Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 bg-white rounded-xl p-4 items-center mx-1 shadow-md">
          <Image
            source={require('../../../assets/images/rewards_icon.jpeg')}
            className="w-9 h-9 mb-2"
            resizeMode="contain"
          />
          <Text className="text-green-700 font-bold">View Rewards</Text>
        </TouchableOpacity>
      </View>

      {/* Eco Tip Card */}
      <View className="bg-green-200 rounded-2xl p-5 mb-4 shadow-sm">
        <Text className="text-lg text-green-700 font-bold mb-2">Eco Tip of the Day</Text>
        <Text className="text-green-800 text-base">
          Segregate wet and dry waste to help recycling and keep your surroundings clean!
        </Text>
      </View>

      {/* Pickup Status Card */}
      <View className="bg-green-200 rounded-2xl p-5 mb-4 shadow-sm">
        <Text className="text-lg text-green-700 font-bold mb-2">Pickup Status</Text>
        <Text className="text-green-800 text-base">
          Next scheduled pickup: Tomorrow at 9:00 AM
        </Text>
      </View>
    </ScrollView>
  );
}

export default HomePage;
