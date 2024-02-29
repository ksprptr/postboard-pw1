import navbarRoutes from "../../utils/routes/navbar-routes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * Component representing navbar
 */
export default function Navbar() {
  const [shadow, setShadow] = useState<boolean>(false);

  // Add shadow to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full py-2 bg-zinc-50 ${shadow ? "shadow-lg" : ""}`}
    >
      <ul className="flex justify-center items-center gap-x-6">
        {navbarRoutes.map((route, i) => (
          <li key={i}>
            <Link
              to={route.path}
              className="font-medium text-lg hover:underline p-2"
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
