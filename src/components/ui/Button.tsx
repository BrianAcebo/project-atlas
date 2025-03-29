export const Button = ({
  children,
  onClick,
  className,
  type = "default",
  rounded = "none",
}: {
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: string;
  rounded?: string;
}) => {
  let typeStyle = "";

  switch (type) {
    case "primary":
      typeStyle = "bg-brand-blue-dark text-white border border-brand-blue-dark";
      break;
    case "secondary":
      typeStyle = "bg-white text-brand-blue-dark border border-white";
      break;
    case "danger":
      typeStyle = "bg-red-500 text-white border border-red-500";
      break;
    case "outline":
      typeStyle = "border border-brand-blue-dark text-brand-blue-dark";
      break;
    case "secondary-outline":
      typeStyle = "border border-white text-white";
      break;
    case "link":
      typeStyle = "text-brand-blue-dark underline";
      break;
    default:
      typeStyle = "bg-brand-blue-dark text-white border border-brand-blue-dark";
      break;
  }

  className = `${className} ${typeStyle}`;

  return (
    <button
      className={`${rounded === "true" ? "rounded-full" : ""} font-montserrat block px-4 py-2.5 text-sm md:text-base ${className} cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
