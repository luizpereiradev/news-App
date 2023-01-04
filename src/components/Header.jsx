function Header() {
  return (
    <header className="z-20 bg-gray-800 w-screen  fixed">
      <div className="w-9/12 h-16 flex justify-between items-center mx-auto">
        <h1 className=" font-bold text-orange-400 text-3xl">News App</h1>
        <form>
          <input placeholder="Pesquisar" className="rounded-md py-1 mx-5 w-20 focus:w-36 outline-orange-400  focus:outline transition-all duration-300"/>
          <button className="text-white font-semibold bg-orange-400 px-2 py-1 rounded-md hover:bg-orange-500 transition duration-200 each-in-out outline-orange-400 hover:scale-105 focus:outline">Buscar</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
