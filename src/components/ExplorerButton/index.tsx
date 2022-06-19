import { PureExplorerButton } from "./ExplorerButton";
import useExplorer from "../../hooks/useExplorer";

const ExplorerButton = () => {
  const { addressExplorer } = useExplorer();

  return <PureExplorerButton explorer={addressExplorer} />;
};

export default ExplorerButton;