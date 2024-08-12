import { useNavigation } from "@react-navigation/native";
import {
    
    View, Text,
    TouchableOpacity,
    StatusBar,
    TextInput
  } from "react-native";
export default function LandingScreen() {
    const navigation = useNavigation();
    return (
        <View className="bg-white h-full w-full">
      <StatusBar barStyle="light-content" />
      <View className="h-full w-full justify-around pt-40 pb-10">
        <View className="flex items-center mx-4 space-y-4">
        <View className="w-full">
          <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3" onPress={() => navigation.push("Login")}>
            <Text className="text-xl font-bold text-white text-center">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full">
          <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3" onPress={() => navigation.push("SignUp")}>
            <Text className="text-xl font-bold text-white text-center">
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
    );
}