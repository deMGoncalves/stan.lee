import radio from '@cea/radio'

export default {
  click () {
    radio.emit('logo', { event: 'click' })
  }
}
