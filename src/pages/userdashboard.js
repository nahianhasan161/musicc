import React from "react";
import Layout from "@/components/layout";
import InputField from "@/components/inputfield";
import { useFormik } from "formik";
import styles from "../styles/Form.module.css";
import { useRouter } from "next/router"; // Don't forget to import useRouter

const UserDashboard = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const formik = useFormik({
    initialValues: {
      username: "", // Add the username field
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      displayName: "",
      state: "",
      address: "",
      city: "",
      pincode: "",
    },
    onSubmit: async (values) => {
      const options = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      };
      try {
        const response = await fetch('http://localhost:3000/api/dashboard/index', options);
        
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
        }
      
        const data = await response.json();
        
        if (data) {
          router.push('http://localhost:3000');
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
      
    },
  });

  return (
    <div className="pt-20 container mx-auto ">{/*  md:bg-rose-900 sm:bg-lime-500 */}
      <Layout>
        <div className="px-4 py-6 w-fit">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="px-3 py-5 rounded-[5px]">
              <div className="mb-10">
                <h5 className="text-[20px] font-semibold text-white_300 leading-[50%]">
                  User Details
                </h5>
                <p className="text-[14px] mt-8 text-white_100 leading-[18px]">
                  Fill down your Personal Details
                  <br /> edit and personalize your licenses according to your
                  needs.
                </p>
              </div>
              <div className="">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mt-grid gap-2 sm:grid-cols-2">
                    <div className={styles.input_group}>
                      {/* First Name */}
                      <InputField
                        className="py-4 "
                        placeholder="First Name"
                        name="firstName"
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className={`${styles.input_group} my-3`}>
                      {/* Last Name */}
                      <InputField
                        className="py-4"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className={`${styles.input_group} my-3`}>
                    {/* Display/Stage Name */}
                    <InputField
                      className="py-4 "
                      placeholder="Display/Stage Name"
                      name="displayName"
                      onChange={formik.handleChange}
                    />
                  </div>

                  <div className={`${styles.input_group} my-3`}>
                    {/* Email ID */}
                    <InputField
                      className="py-4 "
                      placeholder="Email ID"
                      name="email"
                      onChange={formik.handleChange}
                    />
                  </div>

                  <div className="mt-grid gap-2 sm:grid-cols-2">
                    <div className={`${styles.input_group} my-3`}>
                      {/* Country */}
                      <InputField
                        className="py-4 "
                        placeholder="Country"
                        name="country"
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className={`${styles.input_group} my-3`}>
                      {/* State */}
                      <InputField
                        className="py-4"
                        placeholder="State"
                        name="state"
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>

                  {/* New input for Username */}
                  <div className={`${styles.input_group} my-3`}>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className={styles.input_text}
                      {...formik.getFieldProps("username")}
                    />
                  </div>

                  <div className="mt-5 flex gap-4">
                    <button
                      type="submit"
                      className="capitalize bg-yellow text-black_100 text-[14px] rounded-[5px] font-normal text-center px-8 py-2"
                    >
                      save
                    </button>
                    <button className="capitalize bg-bt_color border-[1px] border-yellow text-yellow text-[14px] rounded-[5px] font-normal text-center px-8 py-2">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="px-3 py-5 rounded-[5px]">
              <div className="mb-10">
                <h5 className="text-[20px] font-semibold text-white_300 leading-[50%]">
                  Your Billing
                </h5>
                <p className="text-[14px] mt-8 text-white_100 leading-[18px]">
                  We recommend using our stock contract. However, you can{" "}
                  <br /> edit and personalize your licenses according to your
                  needs.
                </p>
              </div>
              <div>
              <div className={`${styles.input_group} my-3`}>
                  {/* Address */}
                  <InputField
                    className="py-4"
                    placeholder="Address"
                    name="address"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className={`${styles.input_group} my-3`}>
                  {/* City */}
                  <InputField
                    className="py-4"
                    placeholder="City"
                    name="city"
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="mt-grid gap-2 sm:grid-cols-2">
                <div className={`${styles.input_group} my-3`}>
                    {/* State */}
                    <InputField
                      className="py-4 "
                      placeholder="State"
                      name="state"
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className={`${styles.input_group} my-3`}>
                    {/* Pincode */}
                    <InputField
                      className="py-4 "
                      placeholder="Pincode"
                      name="pincode"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default UserDashboard;
