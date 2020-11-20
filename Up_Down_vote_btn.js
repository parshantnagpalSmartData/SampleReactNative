import React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import PropsTypes from "prop-types";
import MyIcon from "./Icon";
import Constants from "../../constants";
import ImageComp from "./ImageComp";
import {moderateScale} from "../../helpers/ResponsiveFonts";
const Upvote_downvote_btn = props => {
  let {upVote} = props;
  return (
    <View>
      <TouchableOpacity style={{...style.vote_btn}}>
        <View
          style={[
            style.backgroundColor,
            {
              backgroundColor: upVote
                ? Constants.Colors.voiletColor
                : Constants.Colors.Red,
            },
          ]}>
          <MyIcon
            name={upVote ? "chevron-up" : "chevron-down"}
            size={moderateScale(13)}
            color={Constants.Colors.White}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Upvote_downvote_btn;

/*
PropsTypes defined for Button
*/
Upvote_downvote_btn.propsTypes = {
  upVote: PropsTypes.bool,
};
/*
Default props from Button
*/
Upvote_downvote_btn.defaultProps = {
  upVote: false,
};

const style = StyleSheet.create({
  vote_btn: {
    marginTop: 5,
  },
  backgroundColor: {
    padding: moderateScale(5),
    paddingBottom: moderateScale(6),
    margin: moderateScale(2),
    borderRadius: moderateScale(3),
    justifyContent: "center",
  },
});
