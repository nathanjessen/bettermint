export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/logo192.png" alt='Mint logo' className="w-8 h-8 inline-block" />
        <h1 className="text-2xl md:text-3xl text-white lowercase flex items-center">
          Better<span className="font-semibold">mint</span>
        </h1>
      </div>
    </div>
  );
};