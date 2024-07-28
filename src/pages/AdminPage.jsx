import AdminDashboard from "../components/AdminDashboard";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import DestinationInput from "../components/DestinationInput";

const AdminPage = () => {
  return (
    <PageContainer>
      <PageHeader>Admin</PageHeader>
      <DestinationInput />
      <AdminDashboard />
    </PageContainer>
  );
};

export default AdminPage;
