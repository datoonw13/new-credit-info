import {Dispatch, SetStateAction} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

type IndividualLegalEntitySwitcherProps = {
  entityType: EntityType;
  setEntityType: Dispatch<SetStateAction<EntityType>>;
  style?: StyleProp<ViewStyle>;
};

type IndividualLegalEntitySwitcherFC = (
  props: IndividualLegalEntitySwitcherProps,
) => JSX.Element;
