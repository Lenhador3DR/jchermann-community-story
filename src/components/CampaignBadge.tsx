import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface CampaignBadgeProps {
  className?: string;
}

const CampaignBadge = ({ className = "" }: CampaignBadgeProps) => {
  return (
    <Link
      to="/mulheres-positivas"
      className={`campaign-badge ${className}`}
      title="Conheça a ação Mulheres Positivas"
    >
      <Heart className="w-3 h-3" />
      <span>Mulheres Positivas</span>
    </Link>
  );
};

export default CampaignBadge;
