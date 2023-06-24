import PropTypes from "prop-types";
import { classNames } from "@/helper/classNames";
export const Button = ({
  className,
  children,
  rounded,
  type,
  variant,
  ...props
}) => {
  return (
    <button
      disabled={variant === "disable" ? true : false}
      type={type === "submit" ? "submit" : type === "reset" ? "reset" : ""}
      className={classNames(
        " rounded-[5px]",

        variant === "primary"
          ? " bg-yellow   hover:bg-bt_color  hover:text-white_300 text-black_100 duration-700 transition-colors "
          : "",
        variant === "secondary"
          ? "  bg-bt_color hover:bg-yellow  hover:text-black_100  text-white hover:bg-zapp-primary transition-colors"
          : "",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  rounded: true,
  variant: "primary",
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  rounded: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "primary-outline",
    "secondary-outline",
    "success-outline",
    "danger-outline",
    "info-outline",
    "light-outline",
    "dark-outline",
    "default",
  ]),
};
