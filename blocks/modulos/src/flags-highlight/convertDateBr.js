import * as f from '@cea/f'

export default function(dateTimeBr){

  if (f.not(dateTimeBr)) return new Date()

    const dateTimeSplit= dateTimeBr.split(' ')
    const date = f.prop('[0]', dateTimeSplit).split('/').reverse().join('-')
    const time = f.prop('[1]', dateTimeSplit)

    return `${date} ${time}-3:00`
}