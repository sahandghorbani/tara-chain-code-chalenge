"use client";
import { ConnectWallet } from "@/components/connect-wallet";

export const Header = () => {
  return (
    <header className="mx-auto py-4 border-b border-[#606060]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl pl-6 font-bold text-[#47FC28] tracking-widest">
          LOREM <span className="text-white">EPS</span>
          UM
        </div>

        <div className="pr-6">
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
};

