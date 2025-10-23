import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CustomFooter = () => {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-3">
            Únete a nuestra comunidad
          </h3>
          <p className="text-sm font-light text-muted-foreground mb-6">
            Recibe las últimas novedades y acceso exclusivo a nuevas colecciones
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              className="h-11 bg-background border-border/60 focus:border-foreground/40 transition-colors"
            />
            <Button variant="luxury" size="default">
              Suscribirse
            </Button>
          </div>
        </div>

        {/* Links and Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-light tracking-wider text-foreground mb-4">
              LUXE
            </h4>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Moda minimalista y sostenible para un estilo de vida consciente
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-normal tracking-wide text-foreground mb-4 uppercase">
              Enlaces
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#coleccion"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Colección
                </a>
              </li>
              <li>
                <a
                  href="#hombre"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hombre
                </a>
              </li>
              <li>
                <a
                  href="#mujer"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mujer
                </a>
              </li>
              <li>
                <a
                  href="#accesorios"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-normal tracking-wide text-foreground mb-4 uppercase">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:bg-foreground/5 hover:border-foreground/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:bg-foreground/5 hover:border-foreground/40 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:bg-foreground/5 hover:border-foreground/40 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 text-center">
          <p className="text-xs font-light text-muted-foreground">
            © 2025 ShopJohan. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
