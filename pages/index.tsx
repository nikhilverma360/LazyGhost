import Image from "next/image";
import { Inter } from "next/font/google";

import LazyPay from "@/pages/LazyGhostSDK/lazypay";
import { ConnectKitButton } from "connectkit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#39375A]">
      <div className="absolute top-0 left-0 p-4 bg-blue-500 text-white">
        <ConnectKitButton />
      </div>
      <div className=" flex flex-col  items-center">
      <p className=" text-white text-2xl">Lazy Store </p>
      </div>
     
      <main
        className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
      >
        <Image src={'/sneaker.png'} alt="" width={500} height={500}></Image>
        <br/>
        <p className=" text-white text-2xl">BUY FOR $1 </p>
        <br/>
        
        <div className="mt-8">
        <LazyPay />
        </div>
       
      </main>
    </div>
  );
}
