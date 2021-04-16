import maskComponent from './maskComponent'

export default new Proxy({}, {
  get: (_, type) =>
    (_, children) => maskComponent(children, type)
})