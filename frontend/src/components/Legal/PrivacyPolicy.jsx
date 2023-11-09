import React from "react";
import { Helmet } from "react-helmet";

// Import the components
import Navbar from ".././Navbar";
import Footer from ".././Footer";
import RegSection from ".././RegSection";

const PrivacyPolicyPage = () => {
  return (
    // React Fragment
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Devgree - Privacy Policy. Understand how we handle and protect your data when you use our platform."
        />
        <title>Devgree Privacy Policy</title>
        {/* Add other meta tags or head elements if needed */}
      </Helmet>

      <div className=" flex flex-col bg-dark text-white">
        <Navbar />

        {/* Privacy Policy content section */}
        <section className=" justify-content-center p-5 bg-white text-dark ">
          <div className="container   " style={{ maxWidth: "600px" }}>
            <h2 className="mb-4">Privacy Policy</h2>
            <p className="lead">
              Your privacy is important to us. It is Devgree's policy to respect
              your privacy regarding any personal information we may collect
              from you across our website, Devgree, and other sites we own and
              operate.
            </p>
            <p>Information Collection and Use</p>
            <p>
              For a better experience while using our platform, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to your name, phone number,
              and postal address. The information that we collect will be used
              to contact or identify you and to display on your public profile
              page as per your settings.
            </p>
            <p>Public Profiles</p>
            <p>
              When you create a profile on Devgree, you have the option to
              display your information publicly. If you choose to make your
              profile public, anyone may view your profile data. If you opt-out,
              your profile will not be visible to others, and we will not share
              your data publicly.
            </p>
            <p>Data Storage and Protection</p>
            <p>
              We value your trust in providing us your personal information,
              thus we strive to use commercially acceptable means of protecting
              it. But remember that no method of transmission over the internet,
              or method of electronic storage is 100% secure and reliable, and
              we cannot guarantee its absolute security.
            </p>
            <p>Cookies</p>
            <p>
              Our website uses these “cookies” to collect information and to
              improve our service. You have the option to either accept or
              refuse these cookies, and know when a cookie is being sent to your
              computer. If you choose to refuse our cookies, you may not be able
              to use some portions of our service.
            </p>
            <p>Service Providers</p>
            <p>
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p>
              We want to inform our service users that these third parties have
              access to your personal information. The reason is to perform the
              tasks assigned to them on our behalf. However, they are obligated
              not to disclose or use the information for any other purpose.
            </p>
            <p>Changes to This Privacy Policy</p>
            <p>
              We may update our Privacy Policy from time to time. Thus, we
              advise you to review this page periodically for any changes. We
              will notify you of any changes by posting the new Privacy Policy
              on this page. These changes are effective immediately after they
              are posted on this page.
            </p>
            <p>Your Rights</p>
            <p>
              You have the right to access, update or to delete the personal
              information we have on you. You can do this by using the personal
              information management tools on your profile settings page. If you
              have any questions about how we handle user data and personal
              information, feel free to contact us.
            </p>
            <p>Contact Us</p>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us.
            </p>
          </div>
        </section>
        <RegSection />
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
