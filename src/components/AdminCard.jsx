/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AdminCard = ({ db, item }) => {
  return (
    <Link
      className="card border-dark border-2 p-2 flex flex-col flex-wrap overflow-scroll"
      to={`/${db}/${item.id}`}
    >
      {JSON.stringify(item)}
    </Link>
  );
};

export default AdminCard;
