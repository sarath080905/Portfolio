// Button.jsx
const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition border";

const variants = {
  primary: "bg-black text-white border-black hover:opacity-90",
  outline: "bg-white text-black border-gray-300 hover:bg-gray-50",
  ghost: "bg-transparent border-transparent hover:bg-gray-100",
};

const Button = ({ as: Tag = "button", variant = "primary", className = "", ...props }) => {
  return <Tag className={`${base} ${variants[variant]} ${className}`} {...props} />;
};

export default Button;
