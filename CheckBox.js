/*
Name: Parshant Nagpal
description: Contains the Custom Button
Date : 4 May 2020
*/

import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import PropsTypes from "prop-types";
import ImageComp from "./ImageComp";

import Constants from "../../constants";
import CommonStyles from "../../styles/CommonStyles";
import {moderateScale} from "../../helpers/ResponsiveFonts";
import CustomButton from "../../components/common/CustomButton";

const CheckBox = props => {
  let {checked, onPress, title} = props;

  const [checkedValue, setcheckedValue] = useState(checked);
  return (
    <View style={Styles.container}>
      <CustomButton
        onPress={() => {
          setcheckedValue(!checkedValue);
        }}>
        <ImageComp
          source={
            Constants.Images.market[checkedValue ? "checked" : "unChecked"]
          }
          style={Styles.checkedBox}
        />
      </CustomButton>
      <Text style={Styles.titleText}>{title}</Text>
    </View>
  );
};
export default CheckBox;

CheckBox.propsTypes = {
  onPress: PropsTypes.func,
  title: PropsTypes.string,
  checked: PropsTypes.bool,
};
CheckBox.defaultProps = {
  onPress: () => {},
  checked: false,
  title: "title",
};

let Styles = StyleSheet.create({
  container: {
    ...CommonStyles.flexDirectionRow,
    width: Constants.BaseStyle.DEVICE_WIDTH * 0.47,
    ...CommonStyles.alignItemsCenter,
    padding: moderateScale(10),
  },

  titleText: {
    ...Constants.Fonts.RobotoRegular,
    paddingLeft: moderateScale(10),
    fontSize: moderateScale(15),
  },
  checkedBox: {
    height: moderateScale(15),
    width: moderateScale(15),
  },
});
