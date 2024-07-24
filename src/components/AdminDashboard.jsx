/* eslint-disable react/prop-types */
import { useTripContext } from "../context/TripProvider";
import AdminList from "./AdminList";

const AdminDashboard = () => {
  const { trips, users } = useTripContext();
  return (
    <div className="dashboard w-full bg-white p-6 card flex flex-col gap-6">
      <AdminList items={trips} db="trips" />
      <AdminList items={users} db="users" />
    </div>
  );
};

export default AdminDashboard;
