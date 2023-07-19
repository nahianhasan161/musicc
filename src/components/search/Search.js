import SongImage from "../../../public/assests/icon/arrow.png";
import searchImage from "../../../public/assests/icon/search.png";
import Image from 'next/image';

export const Search = ({ rounded, width, inputClassName }) => {
  return (
<form className="sm:w-1/2 w-full">
      <div className="relative">
        <input
          type="search"
          className={`block w-full p-4 pl-10 text-base text-[#D8EB55] placeholder-[#D8EB55] rounded-lg bg-[#1C1C1C] ${rounded} ${inputClassName}`}
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className={`text-[#D8EB55] absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2`}
        >
          <Image className="sm:w-full sm:h-6 h-4 w-full" src={SongImage} width={width} height={width} alt="Song Image" />
        </button>
      </div>
    </form>
  );
};



export const SearchHome = ({ rounded, width, inputClassName }) => {
  return (
<form className="w-full">
      <div className="relative">
        <input
          type="search"
          className={`block w-full p-3 pl-10 text-base text-[#D8EB55] placeholder-[#D8EB55] rounded-full bg-[#1C1C1C] `}
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className={`text-[#D8EB55] absolute right-2.5 bottom-1 font-medium rounded-lg text-sm px-4 py-2`}
        >
          <Image src={searchImage} width={width} height={width} alt="Song Image" />
        </button>
      </div>
    </form>
  );
};
