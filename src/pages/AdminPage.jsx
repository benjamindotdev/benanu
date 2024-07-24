import AdminDashboard from "../components/AdminDashboard";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";

const AdminPage = () => {
  return (
    <PageContainer>
      <PageHeader>Admin</PageHeader>
      <AdminDashboard />
    </PageContainer>
  );
};

export default AdminPage;
