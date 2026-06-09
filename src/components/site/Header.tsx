import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";

const nav = [
  { name: "Services", link: "/#services" },
  { name: "Stories", link: "/#stories" },
  { name: "Contact", link: "/#contact" },
  { name: "Network", link: "/stringers" }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="XYZ News Network home"
        >

          <div className="flex h-11 items-center">
            <span className="bg-accent text-accent-foreground font-display font-black text-2xl px-2.5 py-1 leading-none">XYZ</span>
            <span className="ml-2 font-display text-xl font-bold tracking-tight text-ink leading-none">
              News<span className="text-accent">.</span>
            </span>
          </div>
          <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-muted-foreground border-l border-border pl-3">
            News<br />Network
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          <Link
            to="/about"
            className="relative text-ink/80 hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
          >
            About
          </Link>

          {nav.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="relative text-ink/80 hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            >
              {item.name}
            </a>
          ))}

        </nav>
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-paper border-b border-border lg:hidden">
            <div className="container flex flex-col py-4">
              <Link to="/about" className="py-3">
                About
              </Link>

              <a href="/#services" className="py-3"
                onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>

              <a href="/#stories" className="py-3"
                onClick={() => setMobileMenuOpen(false)}>
                Stories
              </a>

              <a href="/#contact" className="py-3"
                onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a href="/stringers" className="py-3" onClick={() => setMobileMenuOpen(false)}>
  Network
</a>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <Button onClick={() => setShowLogin(true)}
            className="btn-secondary" variant="news" size="sm" >
            Press Login</Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {showLogin && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="bg-paper text-ink p-8 rounded-xl w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-display font-bold">
              Press Login
            </h2>

            <p className="mt-2 text-muted-foreground">
              Access live feeds and newsroom content.
            </p>
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
              PRESS ACCESS
            </div>
            <input
              type="email"
              placeholder="Email"
              className="mt-6 w-full border p-3 rounded"
            />

            <input
              type="password"
              placeholder="Password"
              className="mt-4 w-full border p-3 rounded"
            />

            <button
              className="mt-6 w-full bg-accent text-white py-3 rounded font-bold"
            >
              Login
            </button>
          </div>
        </div>
      )}
     </header>
  
  )
};

export default Header;