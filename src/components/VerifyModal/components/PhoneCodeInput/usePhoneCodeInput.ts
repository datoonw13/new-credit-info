import {
  createRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import {TextInput} from 'react-native';
import {PhoneCodeInputProps, InputEvent} from './types';
import {filterInput} from '../helpers';

const useInput = ({onTextChange}: PhoneCodeInputProps, ref: any) => {
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
   * Handle imperative calls.
   */
  useImperativeHandle(ref, () => ({
    clearInputs: () => {
      setFirstInput('');
      setSecondInput('');
      setThirdInput('');
      setForthInput('');
      setTimeout(() => firstInputRef.current?.focus(), 1000);
    },
  }));

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
  const onFirstTextChange = useCallback(
    ({nativeEvent: {text}}: InputEvent) => {
      const character = filterInput(text);
      if (character !== '') {
        setFirstInput(character);
        secondInputRef.current?.focus();
      } else {
        setFirstInput('');
      }
    },
    [secondInputRef],
  );

  /**
   * Second digit handler.
   */
  const onSecondInputTextChange = useCallback(
    ({nativeEvent: {text}}: InputEvent) => {
      const character = filterInput(text);
      if (character !== '') {
        setSecondInput(character);
        thirdInputRef.current?.focus();
      } else {
        setSecondInput('');
        firstInputRef.current?.focus();
      }
    },
    [firstInputRef, thirdInputRef],
  );

  /**
   * Third digit handler.
   */
  const onThirdInputTextChange = useCallback(
    ({nativeEvent: {text}}: InputEvent) => {
      const character = filterInput(text);
      if (text !== '') {
        setThirdInput(character);
        forthInputRef.current?.focus();
      } else {
        setThirdInput('');
        secondInputRef.current?.focus();
      }
    },
    [secondInputRef, forthInputRef],
  );

  /**
   * Forth digit handler.
   */
  const onForthInputTextChange = useCallback(
    ({nativeEvent: {text}}: InputEvent) => {
      const character = filterInput(text);
      if (text !== '') {
        setForthInput(character);
      } else {
        setForthInput('');
        thirdInputRef.current?.focus();
      }
    },
    [thirdInputRef],
  );

  /**
   * Focus input handler.
   */
  const onInputFocus = useCallback(
    (num: number) => {
      if (num === 2 && firstInput === '') {
        firstInputRef.current?.focus();
      } else if (num === 3 && secondInput === '') {
        secondInputRef.current?.focus();
      } else if (num === 4 && thirdInput === '') {
        thirdInputRef.current?.focus();
      }
    },
    [
      firstInput,
      secondInput,
      thirdInput,
      firstInputRef,
      secondInputRef,
      thirdInputRef,
    ],
  );

  /**
   * Input config list.
   */
  const inputConfigList = useMemo(
    () => [
      {
        id: 1,
        value: firstInput,
        onChange: onFirstTextChange,
        ref: firstInputRef,
        onFocus: () => onInputFocus(1),
      },
      {
        id: 2,
        value: secondInput,
        onChange: onSecondInputTextChange,
        ref: secondInputRef,
        onFocus: () => onInputFocus(2),
      },
      {
        id: 3,
        value: thirdInput,
        onChange: onThirdInputTextChange,
        ref: thirdInputRef,
        onFocus: () => onInputFocus(3),
      },
      {
        id: 4,
        value: forthInput,
        onChange: onForthInputTextChange,
        ref: forthInputRef,
        onFocus: () => onInputFocus(4),
      },
    ],
    [
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
    ],
  );

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
    inputConfigList,
  };
};

export default useInput;
