import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ConnectKitButton } from "connectkit";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import LazyPay from "@/LazyGhostSDK/lazypay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-[#39375A] flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Button>Click ME</Button>
      <LazyPay/>
    </main>
  );
}
