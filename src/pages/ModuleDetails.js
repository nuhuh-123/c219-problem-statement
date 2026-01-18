import { useParams } from "react-router-dom";

export default function ModuleDetails() {
  const { diplomaId, moduleId } = useParams();

  return (
    <h2>
      Module {moduleId} from diploma {diplomaId}
    </h2>
  );
}
