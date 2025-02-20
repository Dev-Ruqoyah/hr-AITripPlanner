interface Props {
  text: string;
  variant?: "filled" | "outlined"; 
}

const Button = ({ text, variant = "filled" }: Props) => {
  const baseStyles = "px-4 py-2 rounded-md transition-all duration-300";
  const variants = {
    filled: "bg-primary text-neutral hover:text-neutral1 hover:bg-primary1",
    outlined: "border border-primary text-neutral1 hover:bg-primary hover:text-neutral",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
