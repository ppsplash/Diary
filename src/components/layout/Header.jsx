import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <div className="flex p-10 justify-between bg-orange-200 font-semibold h-28 items-center ">
        <header className="text-4xl align-center font-serif">Welcome to Personal Diary</header>
        <Link className="text-4xl text-center font-serif hover:text-orange-600" to="/Home">
          Home
        </Link>
      </div>
    </>
  );
}
