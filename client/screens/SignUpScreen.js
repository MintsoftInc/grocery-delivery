import * as React from 'react';
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text,
  TextInput
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation } from "@react-navigation/native";

const Email = () => (
  <View className="flex items-center mx-4 space-y-4">
        <View className="bg-black/5 p-5 rounded-2xl w-full">
          <TextInput placeholder="Email" placeholderTextColor={'black'} keyboardType='email-address'/>
        </View>
        <View className="w-full">
          <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
            <Text className="text-xl font-bold text-white text-center">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        
        
);
const Phone = () => (
  
  <View className="flex items-center mx-4 space-y-4">
        <View className="bg-black/5 p-5 rounded-2xl w-full">
          <TextInput placeholder="Phone" placeholderTextColor={'black'} keyboardType='phone-pad'/>
        </View>
        <View className="w-full">
          <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
            <Text className="text-xl font-bold text-white text-center">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        </View>
);

export default class LoginScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'email', title: 'Email' },
      { key: 'phone', title: 'Phone number' },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      
      <View className="flex-row py-0">
        <StatusBar barStyle="light-content" />
        <Text>LogIn</Text>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      
      </View>
      
      
    );
  };
  

  _renderScene = SceneMap({
    email: Email,
    phone: Phone,
  });

  render() {
    return (
      
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});