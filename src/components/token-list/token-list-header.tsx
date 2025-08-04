export const TokenListHeader = () => {
  return (
    <div className="grid grid-cols-7 gap-4 px-6 py-6  bg-[#0A1F0699] text-[#00C728]  text-xs  border-gray-700">
      <div className="col-span-1 text-center">Name</div>
      <div className="col-span-1 text-left">Price</div>
      <div className="col-span-1 text-left">Marketcap</div>
      <div className="col-span-1 text-left">Total Volume</div>
      <div className="col-span-1 text-left">Total Supply</div>
      <div className="col-span-1 text-left">Price Changes Chart</div>
      <div className="col-span-1"></div>
    </div>
  );
};
