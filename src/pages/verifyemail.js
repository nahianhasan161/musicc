/*  "use client";
import axios from "axios";
import Link from "next/link";
import React,{useEffect, useState} from "react"

export default function VerifyEmail(){
    const [token,setToken] = useState("");
    const [verified,setVerified] = useState(false);
    const [error,setError] = useState(false);

    const verifyEmail = async ()=>{
        try {
            await axios.post('/api/verifyemail',{token})
            setVerified(true)
        } catch (error) {
            setError(true)
            console.log(error.response.message);
        }

    }
    useEffect(()=>{
        if(token.length > 0){
            const urlToken = windown.location.search.split("=")[1];
            setToken(urlToken || "");
        }
    })
    useEffect(()=>{
        if(token.length > 0){
            verifyEmail();
        }
    },[token])

    return <div className="flex justify-center items-centr min-h-screen">
        <h1 className="">Verify Email</h1>
        <h2>{token ? `${token}` : "no token"}</h2>
        {verified && <div>Verified</div>}
        {error && <div>Error</div>}
    </div>

}  */
"use client"

import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const VerifyEmail = () => {
    const router =  useRouter();
    const {query,asPath} = router
    const { param } = router.query;
    const [token,setToken] = useState("");
    const [verified,setVerified] = useState(false);
    const [error,setError] = useState(false);
    const [hydrated, setHydrated] = React.useState(false);
    const verifyUserEmail = async ()=>{
        try {
            /* await axios.post('/api/verifyemail',{token}) */
            const options = {
                method: "POST",
                headers : { 'Content-Type': 'application/json'},
                body: JSON.stringify({token})
            }
            
          const response =  await fetch('http://localhost:3000/api/verify', options);
             

                    const data = await response.json();
                    console.log(data)

                
                /* if(res.status == 500){ */
                    setVerified(true)
                
                    
                
                /* .then((data) => {
                    if(data) router.push('http://localhost:3000')
                }) */
        } catch (er) {
            setError(true)
            alert(er)
            console.log(er);
        } 


    }
    
    /* useEffect(()=>{
        if(token.length > 0){
            const urlToken = asPath.split("=")[1];
            setToken(urlToken || "");
        }
    }) */
    useEffect(()=>{
        const urlToken = asPath.split("=")[1];
        setToken(urlToken || "")
    })
    useEffect(()=>{
        if(token.length > 0){
            verifyUserEmail();
        }
    },[token]) 
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
   /*  verifyUserEmail(); */
   console.log(verified)
   console.log(error)
  return (
    <main className="container mx-auto text-center py-20 space-y-4 text-white">
      {token ? (<h3 className="text-4xl font-bold text-green-500">Email Verified</h3>) : <h3 className='text-4xl font-bold'>No Token Found</h3> }
        {error && (<h3 className="text-4xl font-bold text-rose-500">Error Verifying Email</h3>)}
        {error && (<h3 className="text-4xl font-bold text-green-500">Email Verified</h3>)}
      <div className="flex justify-center">
   
     
        <Link href={'/login'}>
          <span className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">Sign In</span>
        </Link>
      </div>
    </main>
  )
}

export default VerifyEmail
