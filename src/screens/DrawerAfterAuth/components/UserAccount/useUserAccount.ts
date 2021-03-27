import {useState} from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from 'store/select';
import DocPicker from 'react-native-document-picker';
import * as services from 'services';

const useUserAccount = () => {
  const user = useSelector(selectUser);
  const [img, setImg] = useState(
    'https://i.pinimg.com/originals/d4/9d/46/d49d467fd122ef34d7dd7630e173314a.jpg',
  );

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
        type: [DocPicker.types.images],
        copyTo: 'cachesDirectory',
      });

      const data = new FormData();
      data.append('profilePhoto', doc);

      const result = await services.updateProfileImage(data);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    onPhotoPress,
    fullName,
    img,
  };
};

export default useUserAccount;
