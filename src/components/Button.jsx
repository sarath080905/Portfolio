// Button.jsx
const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition border";

const variants = {
  primary: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white border-transparent hover:opacity-90",
  outline: "bg-white/85 text-gray-900 border-gray-300 hover:bg-white dark:bg-slate-900/85 dark:text-gray-100 dark:border-slate-700 dark:hover:bg-slate-900",
  ghost: "bg-transparent border-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800",
};

const Button = ({ as: Tag = "button", variant = "primary", className = "", ...props }) => {
  return <Tag className={`${base} ${variants[variant]} ${className}`} {...props} />;
};

export default Button;
