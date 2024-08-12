import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Navigation() {
  return (
    <nav className=" text-slate-700 dark:text-slate-200 flex items-center justify-between px-6 py-4">
      <Link href="/">
        <FontAwesomeIcon className="w-8 hover:text-slate-500" icon={faHouse} />
      </Link>
      <div className="flex gap-x-8 items-center font-light">
        <Link href="/#">View My Projects</Link>
        <Link href="/#">Contact me</Link>
        <button>
          <FontAwesomeIcon
            className="shadow-lg rounded-full w-8 text-blue-200 hover:text-yellow-400 "
            icon={faMoon}
          />
        </button>
      </div>
    </nav>
  );
}
