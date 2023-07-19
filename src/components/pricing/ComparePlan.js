import Image from "next/image";
import { Button } from "../button";
import Typography from "../typography";
import { VerifiedSvg } from "@/svgicon";

const ComparePlan = () => {
  return (
    <div className="px-10">
      <div className=" overflow-x-auto border">
        <table className="w-full text-sm text-left text-gray-500  ">
          <thead className="text-xs text-gray-700 bg-[#272727]">
            <tr>
              <th
                scope="col"
                className="px-6 py-8 text-white text-2xl border-r-2 border-b"
              >
                Compare Plans
                <p className="text-white text-sm">
                  lorem lorem lorem lorem lorem{" "}
                </p>
              </th>
              <th
                scope="col"
                className="px-6 py-8 text-white text-2xl border-r-2 border-b"
              >
                <div>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-4xl font-extrabold text-[#D8EB55]">
                      Rs . 999/mo
                    </span>
                  </div>

                  <button className="bg-[#1C1C1C] w-full rounded-lg font-semibold text-[20px] sm:text-[24px] px-8 sm:px-12 py-1 sm:py-3">
                    Choose
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-8 text-white text-2xl border-r-2 border-b"
              >
                <div>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-4xl font-extrabold text-[#D8EB55]">
                      Rs . 999/mo
                    </span>
                  </div>

                  <button className="bg-[#1C1C1C] w-full rounded-lg font-semibold text-[20px] sm:text-[24px] px-8 sm:px-12 py-1 sm:py-3">
                    Choose
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-8 text-white text-2xl border-r-2 border-b"
              >
                <div>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-4xl font-extrabold text-[#D8EB55]">
                      Rs . 999/mo
                    </span>
                  </div>

                  <Button
                    className={
                      "  font-semibold w-full text-[20px]  sm:text-[24px] px-8  sm:px-12  py-1 sm:py-3"
                    }
                  >
                    Choose
                  </Button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b-2 bg-[#272727] border-r-2">
              <th
                scope="row"
                className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap border-r-2 "
              >
                <Typography variant="h4" className="text-white font-normal">
                  Number of Beats
                </Typography>
              </th>
              <td className="px-6 py-4 border-r-2">
                {" "}
                <Typography variant="h4" className="text-white text-center">
                  Number of Beats
                </Typography>
              </td>
              <td className="px-6 py-4 border-r-2">
                <Typography variant="h4" className="text-white text-center">
                  Number of Beats
                </Typography>
              </td>
              <td className="px-6 py-4 border-r-2">
                <Typography variant="h4" className="text-white text-center">
                  Number of Beats
                </Typography>
              </td>
            </tr>
            <tr className=" border-b bg-[#272727]">
              <th
                scope="row"
                className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r-2"
              >
                <Typography variant="h4" className="text-white font-normal">
                  Number of Beats
                </Typography>
              </th>
              <td className="px-6 py-4 border-r-2"><Typography variant="h4" className="text-white text-center">
                  Number of Beats
                </Typography></td>
              <td className="px-6 py-4 border-r-2"><Typography variant="h4" className="text-white text-center">
                  Number of Beats
                </Typography></td>
              <td className="px-6 py-4 border-r-2"><Typography variant="h4" className="text-white text-center">
                  Number of Beats
                </Typography>

                <Typography variant="h5" className="text-white text-center font-thin">
                  Number of Beats
                </Typography>
                </td>
            </tr>

            <tr className="bg-[#272727]">
              <th
                scope="row"
                className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r-2"
              >
                <Typography variant="h4" className="text-white font-normal">
                  Number of Beats
                </Typography>
              </th>
              <td className="px-6 py-4 border-r-2  ">
                <div className="flex justify-center"><VerifiedSvg/>
                    </div>
                    </td>
              <td className="px-6 py-4 border-r-2"><div className="flex justify-center">
                  <VerifiedSvg />
                </div></td>
              <td className="px-6 py-4 border-r-2"><div className="flex justify-center">
                  <VerifiedSvg />
                </div></td>
            </tr>

            <tr className=" border-b border-t bg-[#272727]">
              <th
                scope="row"
                className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r-2"
              >
                <Typography variant="h4" className="text-white font-normal">
                  Number of Beats
                </Typography>
              </th>
              <td className="px-6 py-4 border-r-2"></td>
              <td className="px-6 py-4 border-r-2"><div className="flex justify-center">
                  <VerifiedSvg />
                </div></td>
              <td className="px-6 py-4 border-r-2"><div className="flex justify-center">
                  <VerifiedSvg />
                </div></td>
            </tr>
            <tr className=" border-b border-t bg-[#272727]">
              <th
                scope="row"
                className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r-2"
              >
                <Typography variant="h4" className="text-white font-normal">
                  Number of Beats
                </Typography>
              </th>
              <td className="px-6 py-4 border-r-2"></td>
              <td className="px-6 py-4 border-r-2"><div className="flex justify-center">
                  <VerifiedSvg />
                </div></td>
              <td className="px-6 py-4 border-r-2"><div className="flex justify-center">
                  <VerifiedSvg />
                </div></td>
            </tr>
            <tr className=" border-b border-t bg-[#272727]">
              <th
                scope="row"
                className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r-2"
              >
                <Typography variant="h4" className="text-white font-normal">
                  Number of Beats
                </Typography>
              </th>
              <td className="px-6 py-4 border-r-2"></td>
              <td className="px-6 py-4 border-r-2"></td>
              <td className="px-6 py-4 border-r-2"><div className="flex justify-center">
                  <VerifiedSvg />
                </div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparePlan;
