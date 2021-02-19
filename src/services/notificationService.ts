import localization from 'utils/localization/config';

let dropDownAlertRef;
export function setDropdownRef(dropdownAlertRef) {
  dropDownAlertRef = dropdownAlertRef;
}

const notificationService = {
  notify: async (type: string, title: string, message: string) => {
    const t = await localization;
    dropDownAlertRef.alertWithType(t(type), t(title), t(message));
  },
};

export default notificationService;
