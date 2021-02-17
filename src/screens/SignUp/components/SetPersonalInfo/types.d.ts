type SetPersonalInfoProps = {
  lastStep: number;
  registerData: any;
  isPerson?: boolean;
};

type SetPersonalInfoFC = (props: SetPersonalInfoProps) => JSX.Element;
