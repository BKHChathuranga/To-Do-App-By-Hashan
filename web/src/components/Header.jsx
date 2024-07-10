const Header = () => {
  return (
    <div className="fixed top-0 w-full z-50 border-b-[0.5px] border-cyan-50 backdrop-blur-sm">
      <div className="flex flex-row items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[4rem] xl:mr-1" href="#home">
          <img src="../../public/vite.png" height={50} width={50} />
        </a>
        <p className="font-semibold  ml-4 text-n-2 text-xl">To-Do App</p>
      </div>
    </div>
  );
};

export default Header;
