import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import Text from 'components/Text';
import Button from 'components/Button';
import {Input} from './components';
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
    this.codeHandler = this.codeHandler.bind(this);
  }

  /**
   * Show the verify modal.
   */
  show() {
    this.setState((prevState) => ({...prevState, visible: true}));
  }

  /**
   * Update code input text.
   */
  codeHandler(code: string) {
    this.setState((prevState) => ({...prevState, code}));
  }

  render() {
    const {visible} = this.state;
    const {t, title, description, onPress} = this.props;
    return (
      <Modal style={styles.modalContainer} isVisible={true}>
        <View style={styles.container}>
          <Text style={styles.title}>{t(title)}</Text>
          <Text style={styles.description}>{t(description)}</Text>
          <Input onTextChange={this.codeHandler} />
          <Button
            text={t('modal.verify')}
            touchableStyle={styles.button}
            onPress={onPress}
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
