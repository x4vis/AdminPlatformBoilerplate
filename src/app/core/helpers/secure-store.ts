export const secureStore = {
  encrypt: (state: string) => window.btoa(state),
  decrypt: (state: string) => window.atob(state),
}