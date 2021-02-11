let dropDownAlertRef;
export function setDropdownRef(dropdownAlertRef) {
  dropDownAlertRef = dropdownAlertRef;
}

const notificationService = {
  notify: (type, title, message) => {
    dropDownAlertRef.alertWithType(type, title, message);
  },
};

export default notificationService;
