import React, {Component, createRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import Text from 'components/Text';
import Button from 'components/Button';
import {PhoneCodeInput, EmailCodeInput} from './components';
import {colors} from 'theme';
import {config} from 'utils';
import {VerifyModalProps, VerifyModalState} from './types';

class VerifyModal extends Component<VerifyModalProps, VerifyModalState> {
  constructor(props: VerifyModalProps) {
    super(props);
    this.state = {
      visible: false,
      code: '',
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.codeHandler = this.codeHandler.bind(this);
    this.inputsRef = createRef();
  }

  /**
   * Show the verify modal.
   */
  show() {
    this.setState((prevState) => ({...prevState, visible: true}));
  }

  /**
   * Hide verify modal.
   */
  hide() {
    this.setState((prevState) => ({...prevState, visible: false}));
  }

  /**
   * Clear input.
   */
  clear() {
    console.log(this.inputsRef);
    this.inputsRef.current?.clearInputs();
  }

  /**
   * Input reference.
   */
  inputsRef: any;

  /**
   * Update code input text.
   */
  codeHandler(code: string) {
    this.setState((prevState) => ({...prevState, code}));
  }

  render() {
    const {visible, code} = this.state;
    const {t, title, description, onPress, mode = 'phone'} = this.props;
    return (
      <Modal
        style={styles.modalContainer}
        isVisible={visible}
        onBackdropPress={this.hide}>
        <View style={styles.container}>
          <Text style={styles.title}>{t(title)}</Text>
          <Text style={styles.description}>{t(description)}</Text>
          {mode === 'phone' && (
            <PhoneCodeInput
              onTextChange={this.codeHandler}
              ref={this.inputsRef}
            />
          )}
          {mode === 'email' && (
            <EmailCodeInput
              onTextChange={this.codeHandler}
              ref={this.inputsRef}
            />
          )}
          <Button
            text={t('modal.verify')}
            touchableStyle={styles.button}
            onPress={() => onPress(code)}
          />
        </View>
      </Modal>
    );
  }
}

export default VerifyModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    marginVertical: config.mobileHeight * 0.3,
    marginHorizontal: config.mobileWidth * 0.05,
    borderRadius: 10,
    minHeight: 300,
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 22,
  },
  description: {
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    marginTop: 32,
    width: '80%',
    marginBottom: 22,
  },
});
