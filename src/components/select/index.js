import { useState, useEffect, useRef } from "react";
import { KeyDownvertSvg } from "@/svgicon";
// import { MdKeyboardArrowDown } from "react-icons/md";
const Select = ({ options }) => {
  const [dropdown, setDropDown] = useState(false);
  const [inputValue, setInputValue] = useState(null);

  const wrapperRef = useRef();

  const handleOptionClick = (option) => {
    setDropDown(false);
    setInputValue(option);
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDropDown(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className=" relative  px-3 py-3   bg-bt_color border-[0.05rem] rounded-md  "
    >
      <div className=" flex" onClick={() => setDropDown(!dropdown)}>
        <input
          type="text"
          name="contry"
          className=" outline-none   w-full  "
          value={inputValue}
          onClick={() => setDropDown(!dropdown)}
        />
        <KeyDownvertSvg />
      </div>
      {setInputValue && dropdown && (
        <ul className=" absolute w-full  left-0  bg-zapp-white rounded-md   top-[3.5rem]  shadow-lg py-4">
          {dropdown &&
            options.map((option) => (
              <li
                key={option}
                className="hover:bg-zapp-primary  hover:text-zapp-white w-full text-[1rem] capitalize mb-4 py-2 px-2 text-Zapp_white"
                onClick={() => handleOptionClick(option.label)}
              >
                {option.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
export default Select;
