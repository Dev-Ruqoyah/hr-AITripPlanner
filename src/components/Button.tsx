
interface Props{
    text:string;
    background:string
}
const Button = ({text,background}:Props) => {
  return (
    <button className={`border-0  text-neutral bg-${background} hover:text-neutral1 px-4 py-2 rounded-md hover:bg-primary1 transition-all duration-300`}>{text}</button>
  )
}

export default Button