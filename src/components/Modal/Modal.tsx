import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import RNModal from 'react-native-modal';
import {colors} from 'theme';
import {ConfigureModalProps} from 'types/global';
import {config} from 'utils';
import {ModalProps, ModalState} from './types';

class Modal extends Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);

    this.state = {
      visible: false,
      element: undefined,
      props: {},
      style: undefined,
    };

    this.onBackDropPress = this.onBackDropPress.bind(this);
    this.configure = this.configure.bind(this);
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  /**
   * Set visible state according to props.
   */
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
      this.close();
    }
  }

  /**
   * Close modal.
   */
  close() {
    this.setState({
      visible: false,
      element: undefined,
      props: {},
      style: undefined,
    });
  }

  /**
   * Show modal.
   */
  show() {
    this.setState((prevState) => ({
      ...prevState,
      visible: true,
    }));
  }

  /**
   * Configure modal.
   */
  configure({element, style, props = {}}: ConfigureModalProps) {
    this.setState((prevState) => ({
      ...prevState,
      element,
      style,
      props,
    }));
  }

  render() {
    const {style} = this.props;
    const {visible} = this.state;

    return (
      <RNModal
        style={[styles.modalContainer, style, this.state.style]}
        onBackdropPress={this.onBackDropPress}
        isVisible={visible}
        {...this.state.props}>
        {this.state.element ?? <></>}
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
