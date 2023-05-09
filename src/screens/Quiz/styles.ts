import { StyleSheet } from 'react-native'

import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  question: {
    alignItems: 'center',
    padding: 32,
    paddingTop: 80,
    paddingBottom: 300,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 24,
  },
})
