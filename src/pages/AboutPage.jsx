/* eslint-disable react/prop-types */
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import Hero from "../components/Hero";

const AboutPage = ({ socials }) => {
  return (
    <PageContainer>
      <PageHeader>About</PageHeader>
      <Hero socials={socials} />
    </PageContainer>
  );
};

export default AboutPage;
