import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import heroCampaign from "@/assets/hero-campaign.webp";
import product1 from "@/assets/product-1.webp";
import product2 from "@/assets/product-2.webp";
import product3 from "@/assets/product-3.webp";
import product4 from "@/assets/product-4.webp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <img src={heroCampaign} alt="J.Chermann - Mulheres Positivas" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto text-center">
            <h1 className="campaign-heading text-4xl md:text-6xl font-light text-primary-foreground mb-4">
              Mulheres <span className="italic">Positivas</span>
            </h1>
            <p className="campaign-body text-primary-foreground/80 mb-8 text-lg">
              Conheça a ação que celebra e fortalece mulheres
            </p>
            <Link to="/mulheres-positivas">
              <Button variant="outline" className="rounded-none px-10 py-5 text-sm font-body uppercase tracking-widest border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Descobrir
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New In Preview */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="campaign-heading text-2xl md:text-3xl font-light text-foreground">
              New <span className="italic">In</span>
            </h2>
            <Link to="/new-in" className="text-xs font-body font-medium uppercase tracking-widest text-primary hover:text-primary/70 transition-colors flex items-center gap-2">
              Ver todos <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <ProductCard image={product1} name="Calça Legging Floral Vintage" price="R$728,00" installments="3x de R$242,67" showBadge />
            <ProductCard image={product4} name="Conjunto Floral Vintage Rose" price="R$1.298,00" installments="3x de R$432,67" showBadge />
            <ProductCard image={product2} name="Camiseta Drapeada Tule Floral" price="R$648,00" installments="3x de R$216,00" showBadge />
            <ProductCard image={product3} name="Blusa Manga Longa Floral Rose" price="R$548,00" installments="3x de R$182,67" showBadge />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
