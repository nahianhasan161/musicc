"use client";
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

}