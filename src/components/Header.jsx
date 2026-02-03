import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    { href: "visitors", label: "visitor" },
    { href: "project", label: "projects" },
    { href: "contacts", label: "contact" },
  ];

  return (
    <header className="w-full max-w-4xl px-10 py-4 mt-3 z-1000">
      {/* Top row: brand + (desktop) nav */}
      <div className="flex items-center justify-around w-full">
        <Link to="/">
          <h1 className="text-1xl md:text-xl font-bold tracking-wide select-none">
            JD.dev
          </h1>
        </Link>

        {/* Desktop / tablet nav */}
        <nav className="hidden sm:block">
          <ul className="flex gap-6">
            {links.map((link, i) => (
              <motion.li
                key={i}
                whileHover={{
                  scale: 1.1,
                  color: "#FFFFFF",
                  fontWeight: 600,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a href={link.href} className="text-[13px]">
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile nav (shows under the title) */}
      <nav className="sm:hidden mt-3">
        <ul className="flex justify-center gap-5 text-sm">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="opacity-90 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
}
