import React from "react";
import { isEmpty } from "lodash";
import {
	Image,
	Text,
	View,
	Animated,
	Dimensions,
	ScrollView,
	StyleSheet,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { Button } from "../Button";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const OFFSET = 40;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2;
const ITEM_HEIGHT = 200;

const Card = ({ items }) => {
	const scrollX = React.useRef(new Animated.Value(0)).current;
	return (
		<ScrollView
			horizontal={true}
			decelerationRate={"normal"}
			snapToInterval={ITEM_WIDTH}
			style={{ paddingHorizontal: 0 }}
			showsHorizontalScrollIndicator={false}
			bounces={false}
			disableIntervalMomentum
			onScroll={Animated.event(
				[{ nativeEvent: { contentOffset: { x: scrollX } } }],
				{ useNativeDriver: false }
			)}
			scrollEventThrottle={12}
		>
			{!isEmpty(items) &&
				items.map((item, idx) => {
					const inputRange = [
						(idx - 1) * ITEM_WIDTH,
						idx * ITEM_WIDTH,
						(idx + 1) * ITEM_WIDTH,
					];

					const translate = scrollX.interpolate({
						inputRange,
						outputRange: [0.85, 1, 0.85],
					});

					const opacity = scrollX.interpolate({
						inputRange,
						outputRange: [1, 1, 1],
					});

					return (
						<Animated.View
							key={item.title}
							style={{
								width: ITEM_WIDTH,
								height: ITEM_HEIGHT,
								marginLeft: idx === 0 ? OFFSET : undefined,
								marginRight:
									idx === items.length - 1
										? OFFSET
										: undefined,
								opacity: opacity,
								transform: [{ scale: translate }],
							}}
						>
							<View
								style={{
									overflow: "hidden",
									paddingBottom: 15,
								}}
							>
								<View style={styles.container}>
									{item.image ? (
										<Image
											source={item.image}
											style={styles.image}
											resizeMode="stretch"
										/>
									) : (
										<AntDesign
											name="pluscircle"
											size={60}
											color={colors.blue}
										/>
									)}
									<Text style={styles.title}>
										{item.title}
									</Text>
									<Text style={styles.description}>
										{item.description}
									</Text>

									{item.image ? (
										<Button
											title="View"
											color={colors.white}
											backgroundColor={colors.blue}
										/>
									) : (
										<Text>{""}</Text>
									)}
								</View>
							</View>
						</Animated.View>
					);
				})}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.white,
		borderRadius: 20,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		marginTop: 80,
		padding: 30,
		width: ITEM_WIDTH,

		elevation: 8,
		shadowColor: "#000",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0,
		shadowRadius: 3,
	},

	image: { position: "absolute", top: -60 },

	title: {
		color: colors.black,
		fontFamily: fonts.title,
		fontSize: 25,
		lineHeight: 30,
		marginBottom: 10,
		marginTop: 20,
		textAlign: "center",
	},
	description: {
		color: colors.gray,
		marginBottom: 20,
		marginTop: 20,
		textAlign: "center",
	},

	button: {
		backgroundColor: colors.blue,
	},
});

export default Card;
