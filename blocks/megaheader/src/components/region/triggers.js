import * as f from '@cea/f'
import radio from '@cea/radio'

const changeRegionAddress = f.magic('changeRegionAddress')
const changeRegionToggle = f.magic('changeRegionToggle')

export default (region) => {
  radio.on('mega-header:data-region-address', (message) =>
    region[changeRegionAddress](message)
  )

  radio.on('mega-header:data-region-toggle', (message) =>
    region[changeRegionToggle](message)
  )
}

export { changeRegionAddress, changeRegionToggle }
