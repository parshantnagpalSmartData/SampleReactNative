/*
 * file :index.js
 * @ description : Contains model for app
 * @ date : 9 Jan 2019
 * @author : Parshant Nagpal
 */

import React, {useState} from "react";
import Modal from "react-native-modal";
import {View} from "react-native";
import PropTypes from "prop-types";
import Constants from "../../constants";

const CustomModal = props => {
  const {
    isVisible,
    onBackdropPress,
    style,
    transparent,
    backdropColor,
    animationIn,
    animationOut,
    animationInTiming,
    animationOutTiming,
  } = props;
  const [visible, setVisible] = useState(isVisible);
  return (
    <Modal
      isVisible={visible}
      style={style}
      deviceWidth={Constants.BaseStyle.DEVICE_WIDTH}
      deviceHeight={Constants.BaseStyle.DEVICE_HEIGHT}
      backdropColor={backdropColor}
      transparent={transparent}
      animationIn={animationIn} // or without prop
      animationOut={animationOut} // or without prop
      animationInTiming={animationInTiming} // or any other
      animationOutTiming={animationOutTiming} // or any other
      onBackdropPress={() => {
        setVisible(false);
        onBackdropPress();
      }}>
      {props.children}
    </Modal>
  );
};

/**
 * declare prop's specific JS type.
 * */
CustomModal.propTypes = {
  isVisible: PropTypes.bool,
  onBackdropPress: PropTypes.func,
  style: PropTypes.object,
  transparent: PropTypes.bool,
  backdropColor: PropTypes.string,
};
CustomModal.defaultProps = {
  isVisible: false,
  onBackdropPress: () => {},
  style: {margin: 0},
  transparent: true,
  backdropColor: Constants.Colors.Transparent,
  animationInTiming: 10,
  animationOutTiming: 10,
  animationOut: "fadeOut",
  animationIn: "fadeIn",
};

export default CustomModal;
