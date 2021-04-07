import {createRef, useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {InputProps, InputEvent} from './types';

const useInput = ({onTextChange}: InputProps) => {
  /**
   * Input state.
   */
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [thirdInput, setThirdInput] = useState('');
  const [forthInput, setForthInput] = useState('');

  /**
   * Input refs.
   */
  const firstInputRef = createRef<TextInput>();
  const secondInputRef = createRef<TextInput>();
  const thirdInputRef = createRef<TextInput>();
  const forthInputRef = createRef<TextInput>();

  /**
   * On input change emit updated digits.
   */
  useEffect(() => {
    const code = `${firstInput}${secondInput}${thirdInput}${forthInput}`;
    onTextChange(code);
  }, [firstInput, secondInput, thirdInput, forthInput, onTextChange]);

  /**
   * First digit handler.
   */
  const onFirstTextChange = ({nativeEvent: {text}}: InputEvent) => {
    if (text !== '') {
      setFirstInput(text.slice(0, 1));
      secondInputRef.current?.focus();
    } else {
      setFirstInput('');
    }
  };

  /**
   * Second digit handler.
   */
  const onSecondInputTextChange = ({nativeEvent: {text}}: InputEvent) => {
    if (text !== '') {
      setSecondInput(text.slice(0, 1));
      thirdInputRef.current?.focus();
    } else {
      setSecondInput('');
      firstInputRef.current?.focus();
    }
  };

  /**
   * Third digit handler.
   */
  const onThirdInputTextChange = ({nativeEvent: {text}}: InputEvent) => {
    if (text !== '') {
      setThirdInput(text.slice(0, 1));
      forthInputRef.current?.focus();
    } else {
      setThirdInput('');
      secondInputRef.current?.focus();
    }
  };

  /**
   * Forth digit handler.
   */
  const onForthInputTextChange = ({nativeEvent: {text}}: InputEvent) => {
    if (text !== '') {
      setForthInput(text.slice(0, 1));
    } else {
      setForthInput('');
      thirdInputRef.current?.focus();
    }
  };

  /**
   * Focus input handler.
   */
  const onInputFocus = () => {
    if (firstInput === '') {
      firstInputRef.current?.focus();
    } else if (secondInput === '') {
      secondInputRef.current?.focus();
    } else if (thirdInput === '') {
      thirdInputRef.current?.focus();
    } else {
      forthInputRef.current?.focus();
    }
  };

  return {
    firstInput,
    secondInput,
    thirdInput,
    forthInput,
    firstInputRef,
    secondInputRef,
    thirdInputRef,
    forthInputRef,
    onFirstTextChange,
    onSecondInputTextChange,
    onThirdInputTextChange,
    onForthInputTextChange,
    onInputFocus,
  };
};

export default useInput;
