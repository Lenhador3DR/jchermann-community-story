import { Link } from "react-router-dom";
import mulheresIcon from "@/assets/mulheres-positivas-icon.png";

interface CampaignBadgeProps {
  className?: string;
}

const CampaignBadge = ({ className = "" }: CampaignBadgeProps) => {
  return (
    <Link
      to="/mulheres-positivas"
      className={className}
      title="Conheça a ação Mulheres Positivas"
    >
      <img src={mulheresIcon} alt="Mulheres Positivas" className="h-10 w-auto" />
    </Link>
  );
};

export default CampaignBadge;
