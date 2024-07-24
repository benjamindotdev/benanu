/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import PageText from "../components/PageText";
import Contact from "../components/Contact";

const ContactPage = ({ socials }) => {
  return (
    <PageContainer>
      <Contact />
    </PageContainer>
  );
};

export default ContactPage;
