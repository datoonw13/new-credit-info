import {StyleProp, ViewStyle} from 'react-native';

type PayGuideProps = {
  style?: StyleProp<ViewStyle>;
};

type PayGuideFC = (props: PayGuideProps) => JSX.Element;
