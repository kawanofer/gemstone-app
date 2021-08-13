import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "./pages/Home";
import colors from "./styles/colors";

const AppStack = createBottomTabNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<AppStack.Navigator
				screenOptions={({ route }) => ({
					activeTintColor: colors.blue,
					headerShown: false,
					inactiveTintColor: colors.gray,
					tabBarIcon: ({ color, size }) => {
						switch (route.name) {
							case "Wearables":
								return (
									<Feather
										name="watch"
										size={size}
										color={color}
									/>
								);
							case "Profile":
								return (
									<MaterialCommunityIcons
										name="face-profile"
										size={size}
										color={color}
									/>
								);
							case "Help":
								return (
									<Feather
										name="help-circle"
										size={size}
										color={color}
									/>
								);
							default:
								return (
									<Feather
										name="help-circle"
										size={size}
										color={color}
									/>
								);
						}
					},
				})}
			>
				<AppStack.Screen name="Wearables" component={Home} />
				<AppStack.Screen name="Profile" component={Home} />
				<AppStack.Screen name="Help" component={Home} />
			</AppStack.Navigator>
		</NavigationContainer>
	);
}
