import {memo} from 'react'

export const Small = memo(({value}) => {

  console.log('first')
  return (
    <small>{value}</small>
  )
})
