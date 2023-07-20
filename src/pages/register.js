import Head from 'next/head'
import Link from 'next/link'
import styles from "../styles/Form.module.css"
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
import { useFormik } from 'formik';
import { registerValidate } from '../lib/validate'
import { signIn, signOut } from "next-auth/react";

import { useRouter } from 'next/router';
import { Button, GoogleButton } from "@/components/button";
import Typography from "@/components/typography";
import Logo from "../../public/assests/logo.png";

export default function Register(){

    const [show, setShow] = useState({ password: false, cpassword: false })
    const [loading,setLoading] = useState(false);
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username : '',
            email: '',
            password: '',
            cpassword: ''
        },
        validate: registerValidate,
        onSubmit
    })

    async function onSubmit(values){
        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }
        await fetch('http://localhost:3000/api/auth/signup', options)
        
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000')
            })
            
    }
  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
    return (
        <>
        <Head>
            <title>Register</title>
           
        </Head>

        <section className='w-full h-screen flex flex-row justify-around items-center gap-10'
        style={{
          backgroundImage: `url('/assests/bg/BG.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
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

                <Button
                    className={
                        "  font-semibold text-[20px]  sm:text-[20px] px-8  sm:px-12  py-1 sm:py-2"
                    }
                >
                    Get Started
                </Button>
            </div>

            <div className="">
                <form className="flex  flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <Typography
                        variant={"h1"}
                        className="  pl-[4rem] text-white sm:pl-0  text-[36px]"
                    >
                        New User <br /> Sign up ?
                    </Typography>{" "}
                    <label className="text-white">Username</label>
                    <div
                        className={`${styles.input_group} ${
                            formik.errors.username && formik.touched.username
                                ? "border-rose-600"
                                : ""
                        }`}
                    >
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className={styles.input_text}
                            {...formik.getFieldProps('username')}
                        />
                      
                    </div>

                    <label className="text-white">Email</label>
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
                            {...formik.getFieldProps('email')}
                        />
                     
                    </div>

                    <label className="text-white">Password</label>
                    <div
                        className={`${styles.input_group} ${
                            formik.errors.password && formik.touched.password
                                ? "border-rose-600"
                                : ""
                        }`}
                    >
                        <input
                            type={`${show.password ? "text" : "password"}`}
                            name="password"
                            placeholder="Password"
                            className={styles.input_text}
                            {...formik.getFieldProps('password')}
                        />
                     
                    </div>

                    <label className="text-white">Confirm Password</label>
                    <div
                        className={`${styles.input_group} ${
                            formik.errors.cpassword && formik.touched.cpassword
                                ? "border-rose-600"
                                : ""
                        }`}
                    >
                        <input
                            type={`${show.cpassword ? "text" : "password"}`}
                            name="cpassword"
                            placeholder="Confirm Password"
                            className={styles.input_text}
                            {...formik.getFieldProps('cpassword')}
                        />
                       
                    </div>

                    <div className=" flex flex-row gap-5 mt-4 mb-10">
                        <Button
                            type="submit"
                            className={
                                "  font-semibold text-[20px]  sm:text-[20px] px-8  sm:px-12  py-1 sm:py-2 whitespace-nowrap"
                            }
                        >
                            Sign Up
                        </Button>
                        <GoogleButton onClick={ handleGoogleSignin} />
                        {/* Add the GoogleButton component here if needed */}
                    </div>
                </form>
                        {loading && (<title>Loading...</title>)}
                <p className="text-center text-white ">
                    Already have an account?{" "}
                    <Link href={"/login"}>
                        <span className="text-blue-700">Sign In</span>
                    </Link>
                </p>
            </div>
        </section>
        </>
    )
}
