import { StyleSheet } from "react-native";

export const G_Styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowOpacity: 0.5,
    elevation : 10,
  },
});

export function getColor (key) {
  switch (key) {
    case 'blue1':
      
      return '#003368';

    case 'blue2':
      
      return '#01266c';

    case 'yellow1':
      
      return '#f1c203';

    case 'yellow2':
      
      return '#f1ce03';

    case 'yellow3':
      
      return '#ffff35';

    case 'yellow4':
      
      return '#fcff8b';

    case 'success':
      
      return '#198754';

    case 'danger':
      
      return '#dc3545';

    case 'light':
      
      return '#f8f9fa';
  
    default:
      return '#212529';
  }
}


export function reverseTheme (theme) {
  if (theme == "dark") {
    return 'light'
  } else {
    return 'dark'
  }
}
export function bgThemePrimary (theme) {
  if (theme == "dark") {
    return '#212529'
  } else {
    return '#f8f9fa'
  }
}

export function txtThemePrimary (theme) {
  if (theme == "dark") {
    return '#f8f9fa'
  } else {
    return '#212529'
  }
}

export function bgThemeSecondary (theme) {
  if (theme == "dark") {
    return '#343a40'
  } else {
    return '#e9ecef'
  }
}

export function txtThemeSecondary (theme) {
  if (theme == "dark") {
    return '#e9ecef'
  } else {
    return '#343a40'
  }
}