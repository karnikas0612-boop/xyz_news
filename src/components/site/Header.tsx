import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const nav = [
  { name: "Coverage", link: "/#coverage" },
  { name: "Services", link: "/#services" },
  { name: "Stories", link: "/#stories" },
  { name: "Contact", link: "/#contact" },
];

const Header = () => (
  <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-border">
    <div className="container flex h-20 items-center justify-between">
      <a href="#top" className="flex items-center gap-3" aria-label="XYZ News Network home">
        <div className="flex h-11 items-center">
          <span className="bg-accent text-accent-foreground font-display font-black text-2xl px-2.5 py-1 leading-none">XYZ</span>
          <span className="ml-2 font-display text-xl font-bold tracking-tight text-ink leading-none">
            News<span className="text-accent">.</span>
          </span>
        </div>
        <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-muted-foreground border-l border-border pl-3">
          News<br />Network
        </span>
      </a>

      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
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

      <div className="flex items-center gap-2">
        <Button variant="news" size="sm" className="hidden sm:inline-flex">Press Login</Button>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </div>
  </header>
);

export default Header;