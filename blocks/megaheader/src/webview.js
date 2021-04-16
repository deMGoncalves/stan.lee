localStorage.setItem('webview', ((new URL(location.href)).searchParams.get('webview')) || localStorage.getItem('webview'))

export default (target) =>
  !/true|1/i.test(localStorage.getItem('webview')) && target()
