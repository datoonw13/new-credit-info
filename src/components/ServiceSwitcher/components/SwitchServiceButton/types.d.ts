import {Dispatch, SetStateAction} from 'react';

type SwitchServiceButtonProps = {
  title: string;
  active?: boolean;
  type: 'Premium' | 'Standard';
  onPress: Dispatch<SetStateAction<ServiceType>>;
};

type SwitchServiceButtonFC = (props: SwitchServiceButtonProps) => JSX.Element;
