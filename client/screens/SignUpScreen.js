import { useNavigation } from "@react-navigation/native";
import {
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Text,
} from "react-native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar barStyle="light-content" />
      <View className="h-full w-full justify-around pt-40 pb-10">
        <View className="flex items-center">
        <Text className="text-black font-bold tracking-wider text-5xl">
          SignUp
        </Text>
        </View>
        <View className="flex items-center mx-4 space-y-4">
        <View className="bg-black/5 p-5 rounded-2xl w-full">
          <TextInput placeholder="Phone" placeholderTextColor={'black'} />
        </View>
        <View className="w-full">
          <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
            <Text className="text-xl font-bold text-white text-center">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.push("Login")}>
            <Text className="text-sky-600">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      
      <Text> Login2 </Text>
    </View>
  );
}
