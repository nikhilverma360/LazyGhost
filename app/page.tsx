"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { ConnectKitButton } from 'connectkit';

export default function Home() {
  return (
    <main className="flex bg-[#39375A] min-h-screen flex-col items-center justify-between p-24">
      <Button>Click ME</Button>
      {/* <ConnectKitButton /> */}
    </main>
  );
}
