import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import Text from 'components/Text';
import Button from 'components/Button';
import {Input} from './components';
import {colors} from 'theme';
import {config} from 'utils';
import {VerifyPhoneModalProps, VerifyPhoneModalState} from './types';

class VerifyPhoneModal extends Component<
  VerifyPhoneModalProps,
  VerifyPhoneModalState
> {
  constructor(props: VerifyPhoneModalProps) {
    super(props);
    this.state = {
      visible: false,
      code: '',
    };

    this.show = this.show.bind(this);
    this.codeHandler = this.codeHandler.bind(this);
  }

  show() {
    this.setState({visible: true});
  }

  codeHandler(code: string) {
    this.setState((prevState) => ({...prevState, code}));
  }

  render() {
    const {visible} = this.state;
    const {t} = this.props;
    return (
      <Modal style={styles.modalContainer} isVisible={true}>
        <View style={styles.container}>
          <Text style={styles.title}>{t('modal.verifyPhone')}</Text>
          <Text style={styles.description}>{t('modal.verifyPhoneText')}</Text>
          <Input onTextChange={this.codeHandler} />
          <Button
            text={t('modal.verifyPhone')}
            touchableStyle={styles.button}
          />
        </View>
      </Modal>
    );
  }
}

export default VerifyPhoneModal;

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
