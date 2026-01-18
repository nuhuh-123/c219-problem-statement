import { useParams } from "react-router-dom";

export default function DiplomaModules() {
  const { diplomaId } = useParams();
  return <h2>Modules for diploma: {diplomaId}</h2>;
}
