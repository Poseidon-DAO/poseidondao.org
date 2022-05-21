import { ProviderTypes } from "types";
import "./walletModal.css";
interface ProviderProps {
  icon: string;
  name: ProviderTypes;
  onClick: (provider: ProviderTypes) => void;
}

export default function Provider({ icon, name, onClick }: ProviderProps) {
  return (
    <div className="provider" onClick={() => onClick(name)}>
      <img src={icon} alt={name} style={{ objectFit: "cover" }} />
    </div>
  );
}
