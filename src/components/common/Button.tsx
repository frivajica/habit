interface ButtonProps {
  children?: React.ReactNode;
  title?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  title,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer p-2 bg-emerald-700 rounded-md ${
        className || ""
      }`}
      onClick={onClick}
      {...props}
    >
      {props.children || title}
    </button>
  );
};
