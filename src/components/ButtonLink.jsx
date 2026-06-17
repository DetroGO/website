import React from "react";

const ButtonLink = ({
  href,
  children,
  variant = "filled",
  size = "medium",
  className = "",
  ...props
}) => {
  const classes = ["button-link", `button-link-${variant}`, `button-link-${size}`]
    .concat(className ? [className] : [])
    .join(" ");

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
};

export default ButtonLink;
