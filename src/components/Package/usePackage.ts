import {useState} from 'react';
import {DateType} from 'types/global';
import {useTranslation} from 'react-i18next';

const usePackage = ({
  monthlyPrice,
  yearlyPrice,
  organizationalProductType,
}: Service) => {
  const {t} = useTranslation();

  const [dateType, setDateType] = useState<DateType>('Month');

  const switchValue = dateType === 'Month';

  const onSwitchValueChange = (val: boolean) =>
    setDateType(val === true ? 'Month' : 'Year');

  const price = dateType === 'Month' ? monthlyPrice : yearlyPrice;

  const numberOfMonths = dateType === 'Month' ? 1 : 12;

  const timeRange = `/ ${numberOfMonths} ${t('month')}`;

  const serviceTitle =
    organizationalProductType === 'STANDARD'
      ? t('serviceScreen.standard')
      : t('serviceScreen.premium');

  return {
    price,
    timeRange,
    switchValue,
    serviceTitle,
    onSwitchValueChange,
  };
};

export default usePackage;
