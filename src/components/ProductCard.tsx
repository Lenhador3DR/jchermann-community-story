import CampaignBadge from "./CampaignBadge";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  installments: string;
  showBadge?: boolean;
}

const ProductCard = ({ image, name, price, installments, showBadge = false }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden mb-3">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {showBadge && (
          <div className="absolute top-3 left-3 z-10">
            <CampaignBadge />
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-body font-normal text-foreground leading-tight">{name}</h3>
        <p className="text-sm font-body font-medium text-primary">{price}</p>
        <p className="text-xs font-body text-muted-foreground">{installments}</p>
      </div>
    </div>
  );
};

export default ProductCard;
