import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm";
import useStock from "../../hooks/useStock";

export default function UpdateItem() {
  const { getItem } = useStock();
  const { id } = useParams();

  console.log("ID da URL:", id);

  const item = getItem(id);

  console.log("Item encontrado:", item);

  if (!item) {
    return <h2>Erro: Item não encontrado!</h2>;
  }

  return (
    <>
      <h2>Atualizar Item - {item.name}</h2>
      <ItemForm itemToUpdate={item} />
    </>
  );
}
