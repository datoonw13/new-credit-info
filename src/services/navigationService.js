let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(name, params) {
  _navigator.navigate(name, params);
}

function getCurrentRoute() {
  if (!_navigator) {
    return null;
  }
  return _navigator.getCurrentRoute().name;
}

export default {
  navigate,
  setTopLevelNavigator,
  getCurrentRoute,
};
