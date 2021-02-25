import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import RNModal from 'react-native-modal';
import {colors} from 'theme';
import {config} from 'utils';
import {ModalProps, ModalState} from './types';

class Modal extends Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);

    this.state = {
      visible: false,
    };

    this.onBackDropPress = this.onBackDropPress.bind(this)
  }

  componentDidMount() {
    const {isVisible} = this.props;
    this.setState({visible: !!isVisible});
  }

  /**
   * Close modal on backdrop press.
   */
  onBackDropPress() {
    const {closeOnBackDropPress = true} = this.props;
    if (closeOnBackDropPress) {
      this.setState({visible: false});
    }
  }

  /**
   * Show modal.
   */
  show() {
    this.setState({visible: true})
  }

  render() {
    const {style, children = null} = this.props;
    const {visible} = this.state;

    return (
      <RNModal
        style={[styles.modalContainer, style]}
        onBackdropPress={this.onBackDropPress}
        isVisible={visible}>
        <View>
          {children}
        </View>
      </RNModal>
    );
  }
}

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    marginHorizontal: config.mobileWidth * 0.1,
    marginVertical: config.mobileHeight * 0.3,
    borderRadius: 10,
  },
});
