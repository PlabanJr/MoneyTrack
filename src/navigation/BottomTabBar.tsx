import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { defaults } from "../constants/defaults";

interface Props {
  renderIcon: any;
  getLabelText: any;
  onTabPress: any;
  onTabLongPress: any;
  getAccessibilityLabel: any;
  navigation: any;
}

export const BottomTabBar = (props: Props) => {
  const {
    renderIcon,
    getLabelText,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View style={Styles.container}>
      {routes.map((route: object, routeIndex: number) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tabStyle = StyleSheet.flatten([Styles.tabButton, isRouteActive ? { backgroundColor: defaults.BOTTOM_TAB } : null])

        return (
          <TouchableOpacity
            key={routeIndex}
            style={tabStyle}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {renderIcon({ route, focused: isRouteActive })}
            {isRouteActive ? <Text style={Styles.tabText}>{getLabelText({ route })}</Text> : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    elevation: 2,
    backgroundColor: defaults.BOTTOM_TAB_BAR,
    justifyContent: "space-evenly",
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    width: defaults.SCREEN_WIDTH / 2 - 40,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  tabText: {
    color: defaults.WHITE,
    fontSize: 18,
    textTransform: "lowercase",
    fontFamily: defaults.TEXT_LIGHT,
    marginLeft: 10
  }
});


