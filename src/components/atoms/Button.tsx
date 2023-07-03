import { FC } from 'react'
import { Button } from 'flowbite-react'
import { IconType } from 'react-icons'

interface ButtonProps {
   btnText?: string
   btnIcon?: any
   btnStyles?: string
   handleClick?: () => void
   iconSide?: string
}

const DefaultButton: FC<ButtonProps> = ({
   btnIcon: Icon, btnText, btnStyles, handleClick, iconSide
}) => {
   return (
      <Button className={`${btnStyles} justify-between w-full`} onClick={handleClick}>
         <span>{iconSide && iconSide === "left" && <Icon size={18} />}</span>
         <h5>{btnText}</h5>
         <span>{iconSide && iconSide === "right" && <Icon size={18} className="ml-auto" />}</span>
      </Button>
   )
}

export default DefaultButton
