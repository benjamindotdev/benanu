/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import PageText from "../components/PageText";

const ContactPage = ({ socials }) => {
  return (
    <PageContainer>
      <PageHeader>Contact</PageHeader>
      <div className="flex flex-row gap-4 justify-center items-start">
        <div className="flex flex-col gap-4">
          <PageText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
            perspiciatis?
          </PageText>
          <a href={socials.benjamin} target="_blank" rel="noreferrer">
            Benjamin's Github
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <PageText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </PageText>
          <a href={socials.senanu} target="_blank" rel="noreferrer">
            Senanu's Github
          </a>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;
