import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import mulheresIcon from "@/assets/mulheres-positivas-icon.png";
import { Button } from "@/components/ui/button";
import CampaignBadge from "@/components/CampaignBadge";
import heroCampaign from "@/assets/hero-campaign.webp";
import campaignGroup from "@/assets/campaign-group.webp";
import campaignDetail from "@/assets/campaign-detail.webp";
import productTshirt from "@/assets/product-tshirt.webp";
import productDetail1 from "@/assets/product-detail-1.webp";
import productDetail2 from "@/assets/product-detail-2.webp";

const MulheresPositivas = () => {
  return (
    <div className="min-h-screen bg-background">
      

      {/* Hero Banner */}
      <section className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden">
        <img
          src={heroCampaign}
          alt="Mulheres Positivas - J.Chermann"
          className="w-full h-full object-cover object-center md:object-top"
        />
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
            iniciativa que destina parte da renda do produto exclusivo para organizações 
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
              Em parceria com o Instituto Mulheres Positivas, a J.Chermann desenvolveu um 
              produto exclusivo. 15% do valor de cada peça é destinado a programas de
              capacitação profissional, mentoria e apoio psicológico para mulheres em todo o Brasil.
            </p>
            <p className="campaign-body text-muted-foreground mb-6">
              Desde o lançamento do projeto, já impactamos mais de 500 mulheres com programas 
              de desenvolvimento pessoal e profissional, e não pretendemos parar por aqui.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <img src={mulheresIcon} alt="Mulheres Positivas" className="h-6 w-auto" />
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
              Peça Exclusiva
            </span>
            <h2 className="campaign-heading text-2xl md:text-3xl font-light text-foreground">
              Produto da <span className="italic">ação</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              { image: productTshirt, phrase: "Mulheres que florescem" },
              { image: productDetail1, phrase: "Moda com propósito" },
              { image: productDetail2, phrase: "Vista essa causa" },
              { image: productTshirt, phrase: "Juntas somos mais fortes" },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.phrase}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <CampaignBadge className="[&_img]:h-[60px]" />
                  </div>
                </div>
                <p className="text-sm font-heading italic text-muted-foreground text-center">{item.phrase}</p>
              </div>
            ))}
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
            <span className="campaign-badge mb-4 inline-flex items-center gap-2">
              <img src={mulheresIcon} alt="" className="h-10 w-auto" />
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
            <p className="text-2xl font-heading font-semibold text-primary mb-1">R$148,00</p>
            <p className="text-sm font-body text-muted-foreground mb-8">Pague parcelado sem juros</p>
            <Button variant="default" className="rounded-none px-12 py-6 text-sm font-body uppercase tracking-widest">
              Comprar agora
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default MulheresPositivas;
