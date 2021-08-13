import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import fonts from "../../styles/fonts";

export function Button({ title, color, backgroundColor, ...rest }) {
	return (
		<TouchableOpacity
			style={styles(backgroundColor, color).container}
			{...rest}
		>
			<Text style={styles(backgroundColor, color).text}>{title}</Text>
		</TouchableOpacity>
	);
}

Button.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
};

const styles = (bgColor, txtColor) => {
	return StyleSheet.create({
		container: {
			backgroundColor: bgColor,
			height: 35,
			borderRadius: 25,
			justifyContent: "center",
			alignItems: "center",

			paddingLeft: 20,
			paddingRight: 20,
		},
		text: {
			fontSize: 16,
			color: txtColor,
			fontFamily: fonts.text,
		},
	});
};
