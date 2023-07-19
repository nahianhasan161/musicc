import React from "react";
import PropTypes from "prop-types";
import { classNames } from "@/helper/classNames";

const RadioButton = ({
    className,
    label,
    name,
    defaultChecked,
    register,
    value,
    type,
    onChange,
    error,
    ...props
}) => {
    return (
        <div className=" flex items-center gap-3">
            <input
                type={
                    type === "radio" ? "radio" : type === "checkbox" ? "checkbox" : ""
                }
                className={classNames(
                    "  w-5 h-5 bg-black_100  accent-black_100   ",
                    className
                )}
                name={name}
                value={value}
                defaultChecked={defaultChecked}
                onChange={onChange}
                {...props}
                {...(register && register(name))}
            />
            <label className="  capitalize  text-sm sm:text-base    text-white_100 font-normal">
                {label}
            </label>
            {error && (
                <p className="  text-sm  text-zapp-warning  font-light  capitalize">
                    {error}
                </p>
            )}
        </div>
    );
};
RadioButton.defaultProps = {
    type: "radio",
};
RadioButton.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(["radio"]),
};

export default RadioButton;