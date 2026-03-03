import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.webp";
import product2 from "@/assets/product-2.webp";
import product3 from "@/assets/product-3.webp";
import product4 from "@/assets/product-4.webp";
import productTshirt from "@/assets/product-tshirt.webp";
import campaignDetail from "@/assets/campaign-detail.webp";

const products = [
  { image: product1, name: "Calça Legging Floral Vintage", price: "R$728,00", installments: "3x de R$242,67", hasBadge: true },
  { image: product4, name: "Conjunto Floral Vintage Rose", price: "R$1.298,00", installments: "3x de R$432,67", hasBadge: true },
  { image: product2, name: "Camiseta Drapeada Tule Floral Vintage", price: "R$648,00", installments: "3x de R$216,00", hasBadge: true },
  { image: product3, name: "Blusa Manga Longa Floral Rose", price: "R$548,00", installments: "3x de R$182,67", hasBadge: true },
  { image: productTshirt, name: "Camiseta Mulheres Positivas", price: "R$298,00", installments: "3x de R$99,33", hasBadge: true },
  { image: campaignDetail, name: "Vestido Wrap Floral Vintage", price: "R$898,00", installments: "3x de R$299,33", hasBadge: false },
];

const NewIn = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="campaign-heading text-3xl md:text-4xl font-light text-foreground mb-3">
              New <span className="italic">In</span>
            </h1>
            <p className="campaign-body text-muted-foreground">
              As últimas novidades da J.Chermann
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
                installments={product.installments}
                showBadge={product.hasBadge}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default NewIn;
