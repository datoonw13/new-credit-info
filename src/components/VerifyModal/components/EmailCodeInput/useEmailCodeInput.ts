import {
  createRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import {TextInput} from 'react-native';
import {EmailCodeInputProps, InputEvent} from './types';
import {filterInput} from '../helpers';

const useInput = (props: EmailCodeInputProps, ref: any) => {
  const {onTextChange} = props;

  /**
   * Input state.
   */
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [thirdInput, setThirdInput] = useState('');
  const [forthInput, setForthInput] = useState('');
  const [fifthInput, setFifthInput] = useState('');
  const [sixthInput, setSixthInput] = useState('');

  /**
   * Input refs.
   */
  const firstInputRef = createRef<TextInput>();
  const secondInputRef = createRef<TextInput>();
  const thirdInputRef = createRef<TextInput>();
  const forthInputRef = createRef<TextInput>();
  const fifthInputRef = createRef<TextInput>();
  const sixthInputRef = createRef<TextInput>();

  /**
   * Set imperative handle.
   */
  useImperativeHandle(ref, () => ({
    clearInputs: () => {
      setSixthInput('');
      setFifthInput('');
      setForthInput('');
      setThirdInput('');
      setSecondInput('');
      setFirstInput('');
      setTimeout(() => firstInputRef.current?.focus(), 1000);
    },
  }));

  /**
   * On input change emit updated digits.
   */
  useEffect(() => {
    const code = `${firstInput}${secondInput}${thirdInput}${forthInput}${fifthInput}${sixthInput}`;
    onTextChange(code);
  }, [
    firstInput,
    secondInput,
    thirdInput,
    forthInput,
    fifthInput,
    sixthInput,
    onTextChange,
  ]);

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
      if (character !== '') {
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
      if (character !== '') {
        setForthInput(character);
        fifthInputRef.current?.focus();
      } else {
        setForthInput('');
        thirdInputRef.current?.focus();
      }
    },
    [thirdInputRef, fifthInputRef],
  );

  /**
   * Fifth digit handler.
   */
  const onFifthInputTextChange = useCallback(
    ({nativeEvent: {text}}: InputEvent) => {
      const character = filterInput(text);
      if (character !== '') {
        setFifthInput(character);
        sixthInputRef.current?.focus();
      } else {
        setFifthInput('');
        forthInputRef.current?.focus();
      }
    },
    [forthInputRef, sixthInputRef],
  );

  /**
   * Sixth digit handler.
   */
  const onSixthInputTextChange = useCallback(
    ({nativeEvent: {text}}: InputEvent) => {
      const character = filterInput(text);
      if (character !== '') {
        setSixthInput(character);
      } else {
        setSixthInput('');
        fifthInputRef.current?.focus();
      }
    },
    [fifthInputRef],
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
      } else if (num === 5 && forthInput === '') {
        forthInputRef.current?.focus();
      } else if (num === 6 && fifthInput === '') {
        fifthInputRef.current?.focus();
      }
    },
    [
      firstInput,
      secondInput,
      thirdInput,
      forthInput,
      fifthInput,
      firstInputRef,
      secondInputRef,
      thirdInputRef,
      forthInputRef,
      fifthInputRef,
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
      {
        id: 5,
        value: fifthInput,
        onChange: onFifthInputTextChange,
        ref: fifthInputRef,
        onFocus: () => onInputFocus(5),
      },
      {
        id: 6,
        value: sixthInput,
        onChange: onSixthInputTextChange,
        ref: sixthInputRef,
        onFocus: () => onInputFocus(6),
      },
    ],
    [
      firstInput,
      secondInput,
      thirdInput,
      forthInput,
      fifthInput,
      sixthInput,
      firstInputRef,
      secondInputRef,
      thirdInputRef,
      forthInputRef,
      fifthInputRef,
      sixthInputRef,
      onFirstTextChange,
      onSecondInputTextChange,
      onThirdInputTextChange,
      onForthInputTextChange,
      onFifthInputTextChange,
      onSixthInputTextChange,
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
