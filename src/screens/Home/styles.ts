import { StyleSheet } from 'react-native'

import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GREY_800,
  },
  levels: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 32,
  },
  cards: {
    paddingTop: 32,
  },
})
