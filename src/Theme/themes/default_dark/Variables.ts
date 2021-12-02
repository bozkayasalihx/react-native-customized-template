import { ThemeColors, ThemeNavigationColors } from '@/Theme/Variables'

const Colors: Partial<ThemeColors> = {
  primary: 'lightblue',
  text: 'white',
  inputBackground: 'gray',
}

const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
}

export default {
  Colors,
  NavigationColors,
}
