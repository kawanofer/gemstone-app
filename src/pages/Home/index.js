import React from "react";
import {
	StatusBar,
	Text,
	SafeAreaView,
	View,
	ImageBackground,
	StyleSheet,
} from "react-native";

import Profile from "../../components/Profile";
import Card from "../../components/Card";

const bgImage = "../../../assets/background.png";

const cards = [
	{
		title: "Moonstone\nKeychain",
		description: "Choosing the Best Gemstone for Your Necklace and Jewelry",
		image: require("../../../assets/rock_1.png"),
	},
	{
		title: "Sapphire\nKeychain",
		description: "Choosing the Best Gemstone for Your Necklace and Jewelry",
		image: require("../../../assets/rock_2.png"),
	},
	{
		title: "Add a Wearable",
		description:
			"Don't See One You Like? Choosing the best Gemstone for Your Necklace and Jewelry ",
		image: "",
	},
];

export function Home() {
	return (
		<ImageBackground source={require(bgImage)} style={styles.image}>
			<SafeAreaView style={styles.container}>
				<View style={styles.wrapper}>
					<Profile name={"Lottie Curtis"} />
					<Card items={cards} style={styles.card} />
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "space-around",
		marginTop: StatusBar.currentHeight,
	},
	wrapper: {
		flex: 1,
	},
	image: {
		height: "100%",
		width: "100%",
		flex: 1,
	},
	card: {
		marginTop: 20,
	},
});
