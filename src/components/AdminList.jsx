/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import AdminCard from "./AdminCard";
import { useState } from "react";

const AdminList = ({ items, db }) => {
  const [slice, setSlice] = useState([0, 5]);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-left text-xl text-accent font-bold">
        {db[0].toUpperCase() + db.slice(1, db.length)}{" "}
        <sup>({items.length})</sup>
      </h1>
      <ul className="card flex flex-col gap-6">
        {items.slice(slice[0], slice[1]).map((item) => (
          <AdminCard db={db} item={item} key={item.id} />
        ))}
      </ul>
      <div className="flex flex-row justify-end">
        {slice[0] > 0 && (
          <button
            className="btn w-1/2 justify-self-start"
            onClick={() => setSlice([slice[0] - 5, slice[1] - 5])}
          >
            Previous
          </button>
        )}
        {slice[1] < items.length && (
          <button
            className="btn w-1/2 justify-self-end"
            onClick={() => setSlice([slice[0] + 5, slice[1] + 5])}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminList;
