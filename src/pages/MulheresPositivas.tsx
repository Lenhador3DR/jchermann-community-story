import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import heroCampaign from "@/assets/hero-campaign.webp";
import campaignGroup from "@/assets/campaign-group.webp";
import campaignDetail from "@/assets/campaign-detail.webp";
import productTshirt from "@/assets/product-tshirt.webp";
import product1 from "@/assets/product-1.webp";
import product2 from "@/assets/product-2.webp";
import product3 from "@/assets/product-3.webp";
import product4 from "@/assets/product-4.webp";

const MulheresPositivas = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Banner */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src={heroCampaign}
          alt="Mulheres Positivas - J.Chermann"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="campaign-heading text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-none mb-4">
              Mulheres
              <br />
              <span className="italic font-normal">Positivas</span>
            </h1>
            <p className="campaign-body text-base md:text-lg text-primary-foreground/80 max-w-md">
              Moda com propósito. Uma ação que celebra e fortalece mulheres.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-campaign-rose mb-6 block">
            Sobre o Projeto
          </span>
          <h2 className="campaign-heading text-3xl md:text-4xl font-light text-foreground mb-8 leading-tight">
            Moda que transforma,
            <br />
            <span className="italic">mulheres que inspiram</span>
          </h2>
          <p className="campaign-body text-muted-foreground text-base md:text-lg mb-6">
            A J.Chermann acredita que a moda vai além da roupa. É sobre empoderamento, 
            autoestima e conexão. Por isso, criamos o projeto Mulheres Positivas — uma 
            iniciativa que destina parte da renda de peças exclusivas para organizações 
            que apoiam mulheres em situação de vulnerabilidade.
          </p>
          <p className="campaign-body text-muted-foreground text-base md:text-lg">
            Cada peça carrega não apenas o nosso DNA de elegância e conforto, mas 
            também o compromisso de fazer a diferença na vida de quem mais precisa. 
            Ao vestir J.Chermann, você se une a essa causa.
          </p>
        </div>
      </section>

      {/* Image + Text Split */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="overflow-hidden">
            <img
              src={campaignGroup}
              alt="Mulheres unidas pela causa"
              className="w-full aspect-square object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="md:pl-8">
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-campaign-rose mb-4 block">
              Nossa Parceria
            </span>
            <h2 className="campaign-heading text-2xl md:text-3xl font-light text-foreground mb-6 leading-tight">
              Apoiando quem
              <br />
              <span className="italic">apoia mulheres</span>
            </h2>
            <p className="campaign-body text-muted-foreground mb-4">
              Em parceria com o Instituto Mulheres Positivas, a J.Chermann desenvolveu uma 
              coleção cápsula exclusiva. 15% do valor de cada peça é destinado a programas de 
              capacitação profissional, mentoria e apoio psicológico para mulheres em todo o Brasil.
            </p>
            <p className="campaign-body text-muted-foreground mb-6">
              Desde o lançamento do projeto, já impactamos mais de 500 mulheres com programas 
              de desenvolvimento pessoal e profissional, e não pretendemos parar por aqui.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-body font-medium">+500 mulheres impactadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Image + Quote */}
      <section className="bg-secondary py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="md:order-2 overflow-hidden">
            <img
              src={campaignDetail}
              alt="Detalhes das peças da coleção"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:order-1">
            <blockquote className="campaign-heading text-2xl md:text-3xl font-light italic text-foreground leading-relaxed mb-6">
              "Cada peça conta uma história de superação e força. 
              Queremos que as mulheres se sintam bonitas e, ao mesmo tempo, 
              parte de algo maior."
            </blockquote>
            <p className="text-sm font-body font-medium text-foreground">— Equipe J.Chermann</p>
          </div>
        </div>
      </section>

      {/* Products Grid - matching mockup */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-campaign-rose mb-4 block">
              Coleção Exclusiva
            </span>
            <h2 className="campaign-heading text-2xl md:text-3xl font-light text-foreground">
              Peças da <span className="italic">ação</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <ProductCard
              image={product1}
              name="Calça Legging Floral Vintage"
              price="R$728,00"
              installments="3x de R$242,67"
              showBadge
            />
            <ProductCard
              image={product4}
              name="Calça Legging Floral Vintage"
              price="R$728,00"
              installments="3x de R$242,67"
              showBadge
            />
            <ProductCard
              image={product2}
              name="Camiseta Drapeada Tule Floral Vintage"
              price="R$648,00"
              installments="3x de R$216,00"
              showBadge
            />
            <ProductCard
              image={product3}
              name="Camiseta Drapeada Tule Floral Vintage"
              price="R$648,00"
              installments="3x de R$216,00"
              showBadge
            />
          </div>

          {/* Mulheres Positivas tag callout */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center py-8 px-6 bg-campaign-blush rounded-sm">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-campaign-warm flex items-center justify-center">
                <Heart className="w-6 h-6 text-campaign-deep" />
              </div>
              <span className="font-heading text-xl font-semibold text-campaign-deep">
                Mulheres Positivas
              </span>
            </div>
            <p className="campaign-body text-muted-foreground text-center md:text-left max-w-md">
              Uma tag será colocada em todos os produtos para dar força à ação.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product CTA */}
      <section className="bg-secondary py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="overflow-hidden">
            <img
              src={productTshirt}
              alt="Camiseta Mulheres Positivas"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="campaign-badge mb-4 inline-flex">
              <Heart className="w-3 h-3" />
              Edição Limitada
            </span>
            <h2 className="campaign-heading text-3xl md:text-4xl font-light text-foreground mb-3 leading-tight">
              Camiseta Mulheres
              <br />
              <span className="italic">Positivas</span>
            </h2>
            <p className="campaign-body text-muted-foreground mb-6">
              Camiseta exclusiva da ação Mulheres Positivas. 100% algodão orgânico com 
              estampa floral artesanal. 15% da renda é destinada ao Instituto Mulheres Positivas.
            </p>
            <p className="text-2xl font-heading font-semibold text-primary mb-1">R$298,00</p>
            <p className="text-sm font-body text-muted-foreground mb-8">3x de R$99,33 sem juros</p>
            <Button variant="default" className="rounded-none px-12 py-6 text-sm font-body uppercase tracking-widest">
              Comprar agora
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default MulheresPositivas;
