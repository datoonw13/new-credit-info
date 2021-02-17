type CountrySelectedModalProps = {
  isVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  setCountry: (country: string) => void;
  activeCountry: any;
  countries: any[];
};

type CountrySelectedModalFC = (props: CountrySelectedModalProps) => JSX.Element;
