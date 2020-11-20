{
  /**
   * Author : Parshant Nagpal
   * ComponentName: ToggleButton
   * Description: Constans toggleButton
   */
}

import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import CustomButton from "./CustomButton";
import CommonStyles from "../../styles/CommonStyles";
import PropsTypes from "prop-types";
import Constants from "../../constants";
import {moderateScale} from "../../helpers/ResponsiveFonts";

const ToggleButton = props => {
  let {button1, button2, onChange} = props;
  const [selectedButton, setSelectedButton] = useState(1);
  return (
    <View style={Styles.container}>
      <CustomButton
        onPress={() => {
          setSelectedButton(1);
          onChange(1);
        }}
        buttonStyle={[
          Styles.buttonContainer,
          Styles.borderRadiusLeft,
          selectedButton == 1 && CommonStyles.backGroundColorRed,
        ]}>
        <Text
          style={[
            Styles.buttonTextStyle,
            selectedButton == 1 && CommonStyles.colorWhite,
          ]}>
          {button1}
        </Text>
      </CustomButton>
      <CustomButton
        onPress={() => {
          setSelectedButton(2);
          onChange(2);
        }}
        buttonStyle={[
          Styles.buttonContainer,
          Styles.borderRadiusRight,
          selectedButton == 2 && CommonStyles.backGroundColorRed,
        ]}>
        <Text
          style={[
            Styles.buttonTextStyle,
            selectedButton == 2 && CommonStyles.colorWhite,
          ]}>
          {button2}
        </Text>
      </CustomButton>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    ...CommonStyles.flexDirectionRow,

    margin: moderateScale(20),
  },
  buttonContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: Constants.Colors.Platinum,
    paddingVertical: moderateScale(10),
    ...CommonStyles.justifiedContentCenter,
    ...CommonStyles.alignItemsCenter,
  },
  borderRadiusLeft: {
    borderBottomLeftRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
  },
  borderRadiusRight: {
    borderBottomRightRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
  buttonTextStyle: {
    ...Constants.Fonts.RobotoMedium,
    color: Constants.Colors.blackT,
  },
});

export default ToggleButton;
/*
PropsTypes defined for Button
*/
ToggleButton.propsTypes = {
  button1: PropsTypes.String,
  button2: PropsTypes.String,
  onChange: PropsTypes.func,
};
/*
  Default props from Button
  */
ToggleButton.defaultProps = {
  button1: "Prize Payout",
  button2: "Contest Rules",
  onChange: () => {},
};
