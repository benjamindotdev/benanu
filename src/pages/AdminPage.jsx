import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import PageText from "../components/PageText";
import { useTripContext } from "../context/TripProvider";

const AdminPage = () => {
  const { trips, users } = useTripContext();
  return (
    <PageContainer>
      <PageHeader>Admin</PageHeader>
      <h1 className="text-left text-xl text-accent font-bold">Trips</h1>
      {JSON.stringify(trips)}
      <h1 className="text-left text-xl text-accent font-bold">Users</h1>
      {JSON.stringify(users)}
    </PageContainer>
  );
};

export default AdminPage;
