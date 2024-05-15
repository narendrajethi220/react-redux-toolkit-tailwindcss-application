const Navbar = () => {
  return (
    <nav>
      <h2 className="text-xl text-center">Welcome to Redux Toolkit</h2>
      <h1 className="text-4xl text-center text-neutral-500 my-4">
        ADMIN TABLE
      </h1>
      <div>
        <ul className="flex flex-row w-[80%] m-[auto] justify-around mb-4 font-semibold text-zinc-500 bg-zinc-100 p-1 ">
          <li className="hover:text-zinc-700">
            <a href="#">HOME</a>
          </li>
          <li className="hover:text-zinc-700">
            <a href="#">ABOUT</a>
          </li>
          <li className="hover:text-zinc-700">
            <a href="#">PROJECTS</a>
          </li>
          <li className="hover:text-zinc-700">
            <a href="#">CODE</a>
          </li>
          <li className="hover:text-zinc-700">
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
