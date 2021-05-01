import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

type SVG = React.StatelessComponent<SvgProps>;

type FancyIconProps = {
  Icon: SVG;
  dimensions?: number;
  roundness?: number;
  visible?: boolean;
  bg?: string;
  style?: StyleProp<ViewStyle>;
};

interface FancyIconFC {
  (props: FancyIconProps): JSX.Element | null;
}
