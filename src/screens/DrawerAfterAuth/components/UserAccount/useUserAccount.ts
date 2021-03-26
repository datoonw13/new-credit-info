import {useSelector} from 'react-redux';
import {selectUser} from 'store/select';
import DocPicker from 'react-native-document-picker';

const useUserAccount = () => {
  const user = useSelector(selectUser);

  /**
   * User full name.
   */
  const fullName = `${user?.name ?? ''} ${user?.lastName ?? ''}`;

  /**
   * Upload/change user photo.
   */
  const onPhotoPress = async () => {
    try {
      const doc = await DocPicker.pick({
        type: ['.jpeg .jpg .png'],
        copyTo: 'cachesDirectory',
      });

      console.log(doc);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    onPhotoPress,
    fullName,
  };
};

export default useUserAccount;
