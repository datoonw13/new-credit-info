import {StyleProp, ViewStyle} from 'react-native';

type PasswordGuideProps = {
  style?: StyleProp<ViewStyle>;
};

type PasswordGuideFC = (props: PasswordGuideProps) => JSX.Element;
