import {Dispatch, SetStateAction} from 'react';

type SwitchServiceButtonProps = {
  title: string;
  active?: boolean;
  type: ServiceType;
  onPress: Dispatch<SetStateAction<ServiceType>>;
};

type SwitchServiceButtonFC = (props: SwitchServiceButtonProps) => JSX.Element;
