import AdminDashboard from "../components/AdminDashboard";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import UserInput from "../components/UserInput";

const AdminPage = () => {
  return (
    <PageContainer>
      <PageHeader>Admin</PageHeader>
      <UserInput />
      <AdminDashboard />
    </PageContainer>
  );
};

export default AdminPage;
