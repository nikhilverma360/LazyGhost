import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { abi } from "@/lib/abi";

const inter = Inter({ subsets: ["latin"] });

export default function LazyPay() {
  const { config, error } = usePrepareContractWrite({
    address: "0x82231c7EFdA562E036B6eE6c9c3a295BfF46cE40",
    abi: abi,
    functionName: "transfer",
    args: [
      "0xfec707AF887414EB92663c6EA3800ee5a5ED75c6",
       1000000000000000000,
    ],
  });
  const { write,  data} = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({ hash: data?.hash });
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const [paymentState, setPaymentState] = useState(0);

  function waitFiveSeconds() {   
    setTimeout(function() {
      setPaymentState(paymentState+1)
    }, 5000); 
  }

  function CheckLoan() {
    waitFiveSeconds()
    return (
      <>
        Checking prices on Aave and creating collateralised loan with chosen
        assets for GHO
      </>
    );
  }

  function ConfirmLoan() {
    return <div  className="text-xl">Loan Amount : <span className="text-red-900">$1</span></div>;
  }

  // Borrowing from Loan and Transferring

  function BorrowAndTransferLoan() {
    if(isSuccess== true) setPaymentState(paymentState+1)
    return <>Borrowing from Loan and Transferring</>;
  }

  function SuccessfullTxn() {
    return <>Your purchase is complete!</>;
  }

  function handleState() {
    if (paymentState == 0) {
      setPaymentState(paymentState + 1);
    }
    if (paymentState == 2) {
      write?.();
      console.log("clicked")
      setPaymentState(paymentState + 1);
    }
  }

  return (
    <main>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="bg-black text-white p-4 rounded-xl">
            Pay with Lazy Ghost
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className=" text-4xl mb-4">Lazy Ghost </AlertDialogTitle>
            <AlertDialogDescription className="">
              {paymentState == 0 && (
                <>
                  {isDisconnected && <ConnectKitButton />}
                  {isConnected && (
                    <>
                      <div className="text-xl"> Your Credit Limit Left : <span className="text-green-900">$20</span> </div>
                      <div className="text-2xl">You are Paying :<span className="text-red-900">$1</span> </div>
                    </>
                  )}
                </>
              )}
              {paymentState == 1 && (
                <>
                  {isConnected && (
                    <>
                      <CheckLoan />
                    </>
                  )}
                </>
              )}
              {paymentState == 2 && (
                <>
                  {isConnected && (
                    <>
                      <ConfirmLoan />
                    </>
                  )}
                </>
              )}
              {paymentState == 3 && (
                <>
                  {isConnected && (
                    <>
                      <BorrowAndTransferLoan />
                    </>
                  )}
                </>
              )}
              {paymentState == 4 && (
                <>
                  {isConnected && (
                    <>
                      <SuccessfullTxn />
                    </>
                  )}
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {paymentState == 0 && <AlertDialogCancel>Cancel</AlertDialogCancel>}
            {paymentState == 2 && <AlertDialogCancel>Cancel</AlertDialogCancel>}
            {paymentState == 4 && <AlertDialogCancel>Close</AlertDialogCancel>}

            {paymentState == 0 && (
              <Button onClick={handleState}>Confirm Purchase </Button>
            )}
            {paymentState == 2 && (
              <Button onClick={handleState}>Confirm Loan & Pay </Button>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
