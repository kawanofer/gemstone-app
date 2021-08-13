import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import ProfileImage from "../../../assets/person.png";

import { Button } from "../Button";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const Profile = ({ name }) => {
	return (
		<View style={styles.container}>
			<Image
				source={ProfileImage}
				style={styles.profileImg}
				resizeMode="stretch"
			/>
			<Text style={styles.title}>{name}</Text>
			<Button
				title="You have 3 Products"
				color={colors.black}
				backgroundColor={colors.white}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginTop: 40,
	},
	title: {
		fontSize: 18,
		textAlign: "center",
		color: colors.white,
		marginTop: 10,
		marginBottom: 10,
		fontFamily: fonts.heading,
		lineHeight: 34,
	},
	profileImg: {
		height: 60,
		width: 60,
		borderRadius: 40,
	},
});

export default Profile;
