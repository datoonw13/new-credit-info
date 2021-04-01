import {useForm} from 'react-hook-form';

const useUpdatePersonalData = () => {
  const {control, errors, handleSubmit} = useForm({
    defaultValues: {
      username: '00000000000',
      firstName: 'გეო',
      lastName: 'ანთაძე',
      birthDate: '02 იანვარი 1997',
      phoneNumber: '557557557',
      email: 'geo@mail.ru',
      country: 'საქართველო',
      address: 'სანქტ-პეტერბურგი',
    },
  });

  /**
   * Save data on save button press.
   */
  const onSaveButtonPress = (data) => {
    console.log({data});
  };

  return {
    onSaveButtonPress,
    handleSubmit,
    control,
    errors,
  };
};

export default useUpdatePersonalData;
