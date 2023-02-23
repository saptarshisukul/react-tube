import React from 'react'
import Button from './Button'

 // const List = ["All","Gaming","Songs","Live","Football","Coocking","Travelling","Cricket"]
const ButtonList = () => {
  return (
      
    <div className='flex'>
      < Button name = "All" />
      <Button name = "Gaming"/>
      <Button name = "Songs"/>
      <Button name = "Live" />
      <Button name  = "Football" />
      <Button name = "Coocking"/>
      <Button name = "Travelling"/>
      <Button name = "Cricket"/>
      


    </div>
  )
}

export default ButtonList