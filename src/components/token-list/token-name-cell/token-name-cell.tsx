// app/components/TokenNameCell.tsx
"use client";

import { TokenNameCellProps } from "@/components/token-list/token-name-cell/token-name-cell-props.type";
import Image from "next/image";
import { FC } from "react";

export const TokenNameCell: FC<TokenNameCellProps> = ({ index, token }) => {
  return (
    <div className=" flex items-center space-x-3">
      <span className="text-[#95FF83] text-xs font-semibold text-center w-6">
        {index + 1}
      </span>
      <Image
        src={token.image}
        alt={token.name}
        width={32}
        height={32}
        className="rounded-full"
      />
      <div>
        <p className="font-bold text-base">{token.symbol.toUpperCase()}</p>
        <p className="text-sm text-gray-400">{token.name}</p>
      </div>
    </div>
  );
};
