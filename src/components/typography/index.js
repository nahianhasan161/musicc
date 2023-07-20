import React from "react";
import PropTypes from "prop-types";
import { classNames } from "@/helper/classNames";

const Typography = ({ className, children, variant, ...props }) => {
  return (
    <div
      className={classNames(
        "   w-full",
        variant === "h1"
          ? `  text-[1.75rem] lg:text-[2.25rem]   font-bold `
          : variant === "h2"
            ? " text-lg lg:text-[2rem]  font-semibold"
            : variant === "h3"
              ? " text-lg  font-bold"
              : variant === "h4"
                ? "text-[0.8rem]  sm:text-[1.2rem] font-semibold"
                : variant === "h5"
                  ? " text-sm  font-bold"
                  : variant === "h6"
                    ? " teaxt-base"
                  : variant === "p"
                    ? " font-AmsiPro-L font-normal text-[16px] sm:text-[24px] text-[#ADADAD] "
                  : variant === "span"
                    ? " font-AmsiProNarw-LI font-normal text-[14px] sm:text-[24px] text-[#ADADAD] "
                    : "",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};

export default Typography;
