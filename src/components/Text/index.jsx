import React from "react";

const variantClasses = {
  h1: "font-black sm:text-[40px] md:text-[46px] text-[50px]",
  h2: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h3: "text-4xl sm:text-[32px] md:text-[34px]",
  h4: "text-2xl md:text-[22px] sm:text-xl",
  h5: "text-lg",
  h6: "text-base",
  body1: "text-sm",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
