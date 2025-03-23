import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  title?: string;
  href: string;
  className?: string;
}

export const LinkButton = ({
  title,
  className,
  href,
  ...props
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`flex justify-center items-center cursor-pointer p-2 bg-emerald-700 rounded-md ${
        className || ""
      }`}
      {...props}
    >
      {props.children || title}
    </Link>
  );
};
