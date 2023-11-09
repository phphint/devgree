import React from "react";
import { Helmet } from "react-helmet";

// Import the components
import Navbar from ".././Navbar";
import Footer from ".././Footer";
import RegSection from ".././RegSection";

const TermsOfServicePage = () => {
  return (
    // React Fragment
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Devgree - Terms of Service. Read our terms and understand your rights and responsibilities when using Devgree."
        />
        <title>Devgree Terms of Service</title>
        {/* Add other meta tags or head elements if needed */}
      </Helmet>

      <div className="min-h-screen flex flex-col bg-dark text-white">
        <Navbar />

        {/* Updated section with flexbox properties */}
        <section className=" justify-content-center p-5 bg-white text-dark ">
          <div className="container   " style={{ maxWidth: "600px" }}>
            <h2 className="mb-4">Terms of Service</h2>
    
            <p className="lead">
              Welcome to Devgree! These terms and conditions outline the rules
              and regulations for the use of Devgree's platform.
            </p>
            <p>
              By accessing this website, you accept these terms and conditions
              in full. Do not continue to use Devgree's platform if you do not
              accept all of the terms and conditions stated on this page.
            </p>
            <p>
              The following terminology applies to these Terms and Conditions:
              “Client”, “You” and “Your” refers to you, the person accessing
              this website and accepting the company’s terms and conditions.
              “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our
              Company, Devgree.
            </p>
            <p>
              Any use of the above terminology or other words in the singular,
              plural, capitalization and/or he/she or they, are taken as
              interchangeable and therefore as referring to the same.
            </p>

            <h3>License</h3>
            <p>
              Unless otherwise stated, Devgree and/or its licensors own the
              intellectual property rights for all material on Devgree. All
              intellectual property rights are reserved. You may view and/or
              print pages from Devgree for your own personal use subject to
              restrictions set in these terms and conditions.
            </p>

            <h3>No Warranty</h3>
            <p>
              The platform and all content, materials, information, software,
              products and services are provided “as is,” with no warranties or
              guarantees whatsoever. Devgree expressly disclaims to the fullest
              extent permitted by law all express, implied, statutory, and other
              warranties, guarantees, or representations, including, without
              limitation, the warranties of merchantability, fitness for a
              particular purpose, and non-infringement of proprietary and
              intellectual property rights.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              In no event will Devgree be liable to any party for any direct,
              indirect, incidental, special, exemplary or consequential damages
              of any type whatsoever related to or arising from this platform or
              any use of this platform, or of any site or resource linked to,
              referenced, or accessed through this platform, or for the use or
              downloading of, or access to, any materials, information,
              products, or services, including, without limitation, any lost
              profits, business interruption, lost savings or loss of programs
              or other data, even if Devgree is expressly advised of the
              possibility of such damages.
            </p>

            <h3>Content Liability</h3>
            <p>
              We shall have no responsibility or liability for any content
              appearing on your public profile or within your portfolio. You
              agree to indemnify and defend us against all claims arising out of
              or based upon your public profile. No link(s) may appear on any
              page on your public profile or within any context containing
              content or materials that may be interpreted as libelous, obscene
              or criminal, or which infringes, otherwise violates, or advocates
              the infringement or other violation of, any third party rights.
            </p>

            <h3>Reservation of Rights</h3>
            <p>
              We reserve the right to request that you remove all links or any
              particular link to our platform. You approve to immediately remove
              all links to our platform upon such request. We also reserve the
              right to amend these terms and conditions and its linking policy
              at any time. By continuously linking to our platform, you agree to
              be bound to and abide by these linking terms and conditions.
            </p>

            <h3>Your Privacy</h3>
            <p>Please read our Privacy Policy.</p>

            <h3>Severability</h3>
            <p>
              If any provision of these terms is found to be unenforceable or
              invalid under any applicable law, such unenforceability or
              invalidity shall not render these terms unenforceable or invalid
              as a whole, and such provisions shall be deleted without affecting
              the remaining provisions herein.
            </p>

            <h3>Variation of Terms</h3>
            <p>
              Devgree is permitted to revise these terms at any time as it sees
              fit, and by using this platform, you are expected to review these
              terms on a regular basis to ensure you understand all terms and
              conditions governing the use of this platform.
            </p>

            <h3>Entire Agreement</h3>
            <p>
              These terms, including any legal notices and disclaimers contained
              on this platform, constitute the entire agreement between Devgree
              and you in relation to your use of this platform, and supersede
              all prior agreements and understandings with respect to the same.
            </p>

            <h3>Governing Law & Jurisdiction</h3>
            <p>
              These terms will be governed by and construed in accordance with
              the laws of the country/state where Devgree is established, and
              you submit to the non-exclusive jurisdiction of the state and
              federal courts located in said country/state for the resolution of
              any disputes.
            </p>
          </div>
        </section>
        <RegSection />
        <Footer />
      </div>
    </>
  );
};

export default TermsOfServicePage;
