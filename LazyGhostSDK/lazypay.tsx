import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
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

const inter = Inter({ subsets: ["latin"] });

export default function LazyPay() {
    
  return (
    <main
    >
      <ConnectKitButton></ConnectKitButton>
      <AlertDialog>
        <AlertDialogTrigger className="bg-black text-white p-4 rounded-xl">Pay with Lazy Ghost</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className=" ">Lazy Ghost   </AlertDialogTitle>
            <AlertDialogDescription>
            <ConnectKitButton/>
            <div> Credit Limit : $200</div>
             <div>You are Paying : $20 </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm Purchase</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
