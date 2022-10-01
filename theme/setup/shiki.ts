import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: 'min-dark'/*await loadTheme(require.resolve('theme-vitesse/themes/vitesse-dark.json'))*/,
      light: 'min-light'/*await loadTheme(require.resolve('theme-vitesse/themes/vitesse-light.json'))*/,
    },
  }
})
