const decodeState = (state: string) => decodeURIComponent(window.atob(state).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code
  }))

export const secureStore = {
  encrypt: (state: string) => window.btoa(state),
  decrypt: (state: string) => decodeState(state),
}