import { Link } from 'react-router'

interface Props {
    subTitle?: string;
}

export const CustomLogo = ({subTitle='shop'}: Props) => {
  return (
    <Link to="/" className='flex items-center whitespace-nowrap'>
        <span className='font-montserrat font-bold text-xl m-0 whitespace-nowrap'>Slat |</span>
        <span className='font-montserrat font-light text-xl px-2 whitespace-nowrap'>{subTitle}</span>
    </Link>
  )
}
