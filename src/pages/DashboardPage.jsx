import PageContainer from "../components/PageContainer";
//import PageHeader from "../components/PageHeader";
//import PageText from "../components/PageText";
import Dashboard from "../components/Dashboard";
import UserInput from "../components/UserInput";

const DashboardPage = () => {
  return (
    <PageContainer>
      {/* <PageHeader>Dashboard</PageHeader>
      <div className="grid grid-cols-2 grid-rows-3 gap-6 card glass p-6 ">
        <PageText className="text-slate-950">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          quaerat harum earum quod expedita modi nam laudantium fugiat quasi
          suscipit.
        </PageText>
        <PageText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          quaerat harum earum quod expedita modi nam laudantium fugiat quasi
          suscipit.
        </PageText>
        <PageText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          quaerat harum earum quod expedita modi nam laudantium fugiat quasi
          suscipit.
        </PageText>
        <PageText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          quaerat harum earum quod expedita modi nam laudantium fugiat quasi
          suscipit.
        </PageText>
      </div> */}
      <UserInput />
      <Dashboard />
    </PageContainer>
  );
};

export default DashboardPage;
