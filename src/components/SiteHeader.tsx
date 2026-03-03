import { Link } from "react-router-dom";
import { Search, User, ShoppingBag } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-3 max-w-[1440px] mx-auto">
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/new-in" className="text-xs font-body font-medium tracking-widest uppercase text-foreground hover:text-primary transition-colors">
            New In
          </Link>
          <span className="text-xs font-body font-medium tracking-widest uppercase text-muted-foreground cursor-default">
            Roupas
          </span>
          <span className="text-xs font-body font-medium tracking-widest uppercase text-muted-foreground cursor-default">
            Shop The Look
          </span>
          <span className="text-xs font-body font-medium tracking-widest uppercase text-muted-foreground cursor-default">
            Outlet
          </span>
        </nav>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="font-heading text-2xl font-semibold tracking-wide text-foreground">
            jchermann
          </span>
        </Link>

        <div className="flex items-center gap-5 ml-auto">
          <Search className="w-4 h-4 text-foreground cursor-pointer hover:text-primary transition-colors" />
          <User className="w-4 h-4 text-foreground cursor-pointer hover:text-primary transition-colors" />
          <ShoppingBag className="w-4 h-4 text-foreground cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
