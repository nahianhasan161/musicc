import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "../lib/validate";
import { useRouter } from "next/router";
import { Button, GoogleButton } from "@/components/button";
import Typography from "@/components/typography";
import Logo from "../../public/assests/logo.png";

export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  // formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    if (status.ok) router.push(status.url);
  }

  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <>
      <section
        className="w-full h-screen flex flex-row justify-around items-center gap-10"
        style={{
          backgroundImage: `url('/assests/bg/BG.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* form */}
        <div className="">
          <div className=" relative bottom-10 w-[44px] h-[44px] mb-5">
            <Image
              src={Logo}
              height={60}
              width={60}
              className="w-full h-full"
              alt="logo"
            />
          </div>
          <Typography
            variant={"h1"}
            className="  pl-[4rem] text-white sm:pl-0 font-bold mb-4 text-[36px]"
          >
            Lowfied,
          </Typography>
          <Typography
            variant={"h1"}
            className="  pl-[4rem] text-white sm:pl-0 font-normal mb-6 text-[36px]"
          >
            The Ultimate Beat <br /> Marketplace for Music <br /> Producers.
          </Typography>
          <Typography
            variant={"h4"}
            className="  pl-[4rem] text-white font-thin sm:pl-0 mb-6  text-[36px]"
          >
            Look no further, we've got the sickest beats <br /> from the hottest
            producers, all in one place.
          </Typography>

          <Link href={"/register"} className="cursor-pointer">
          <Button
            className={
              "  font-semibold text-[20px]  sm:text-[20px] px-8  sm:px-12  py-1 sm:py-2"
            }
          >
            Get Started
          </Button>
          </Link>
        </div>
        <div className="">
          <form className="flex  flex-col gap-5" onSubmit={formik.handleSubmit}>
            <Typography
              variant={"h1"}
              className="  pl-[4rem] text-white sm:pl-0  text-[36px]"
            >
              Already a User <br /> Sign in ?
            </Typography>{" "}
            <label className="text-white">UserName or Email</label>
            <div
              className={`${styles.input_group} ${
                formik.errors.email && formik.touched.email
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input_text}
                {...formik.getFieldProps("email")}
              />
            </div>
            {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}
            <label className="text-white">UserName or Email</label>
            <div
              className={`${styles.input_group} ${
                formik.errors.password && formik.touched.password
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="password"
                className={styles.input_text}
                {...formik.getFieldProps("password")}
              />
            </div>
            <div className=" flex flex-row gap-5 mt-4 mb-10">
              <Button
                className={
                  "  font-semibold text-[20px]  sm:text-[20px] px-8  sm:px-12  py-1 sm:py-2"
                }
              >
                Login
              </Button>
              <GoogleButton onClick={ handleGoogleSignin} />
            </div>
          </form>
          <p className="text-center text-white ">
            don't have an account yet?{" "}
            <Link href={"/register"}>
              <span className="text-blue-700">Sign Up</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
