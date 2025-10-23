import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const CustomHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="text-xl lg:text-2xl font-light tracking-wider text-foreground hover:text-foreground/80 transition-colors duration-300">
            LUXE
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#coleccion" className="text-sm font-normal tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300">
              Colección
            </a>
            <a href="#hombre" className="text-sm font-normal tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300">
              Hombre
            </a>
            <a href="#mujer" className="text-sm font-normal tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300">
              Mujer
            </a>
            <a href="#accesorios" className="text-sm font-normal tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300">
              Accesorios
            </a>
            <a href="#contacto" className="text-sm font-normal tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300">
              Contacto
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar..."
                value={""}
                onChange={(e) => {}}
                className="pl-10 h-9 bg-card/50 border-border/40 focus:border-primary/20"
              />
            </div>

            {/* Cart Button */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t border-border/40 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={""}
                onChange={(e) => {}}
                className="pl-10 bg-card/50 border-border/40 focus:border-primary/20"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 space-y-4 border-t border-border/40 animate-fade-in">
            <a href="#coleccion" className="block text-sm font-normal tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300">
              Colección
            </a>
            <a href="#hombre" className="block text-sm font-normal tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300">
              Hombre
            </a>
            <a href="#mujer" className="block text-sm font-normal tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300">
              Mujer
            </a>
            <a href="#accesorios" className="block text-sm font-normal tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300">
              Accesorios
            </a>
            <a href="#contacto" className="block text-sm font-normal tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300">
              Contacto
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

