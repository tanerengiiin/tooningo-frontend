import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
const LoginPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center ">
      <div className=" max-w-[440px] space-y-6 mx-4 px-6 pt-6 pb-6 border-constructive/30 border rounded-xl bg-gradient-to-br from-constructive/10 via-constructive/5 via-[50%] to-constructive/20">
        <Link href={"/"} className="text-constructive/80 font-bold text-2xl">TOONINGO</Link>
        <p className="text-3xl text-primary font-semibold pointer-events-auto leading-tight">
            <span className="opacity-70">Not Just in Language, But in Emotion Too.</span> <span className="opacity-80">Webtoons<a href={"https://www.youtube.com/watch?v=lags8E4hvow"} target="_blank">.</a></span></p>
        <div>
          <Button variant="pink" className=' w-full h-12'>
          <svg
            className="w-3.5 h-3.5 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 488 512"
              fill="#ffffff"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            <span className="font-medium ml-1">Continue with Google</span>
          </Button>
          <p className="text-[0.6rem] opacity-75 leading-3 mt-1.5">By clicking &quot;Continue with Google&quot;, you acknowledge that you have read and understood, and agree to Tooningo&apos;s <Link className="hover:underline" href={"/terms"}>Terms of Use</Link> and <Link className="hover:underline" href={"/privacy"}>Privacy Policy</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
