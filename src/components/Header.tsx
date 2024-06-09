import Link from 'next/link';
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <span className="text-sm inline-flex items-baseline">
          <span className="mt-2"><FaHome /></span>
          <span className="pl-1">Home</span>
        </span>
      </Link>
    </header>
  );
}
