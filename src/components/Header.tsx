import Link from 'next/link';
import { FaHome } from "react-icons/fa";

type Props = {
  currentPath?: string;
}

export default function Header(props: Props) {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <span className="text-sm inline-flex items-baseline">
          <span className="mt-2"><FaHome /></span>
          <span className="pl-1">Home</span>

          {
            props.currentPath && (
              <span className="px-1"> / {props.currentPath}</span>
            )
          }
        </span>
      </Link>
    </header>
  );
}
