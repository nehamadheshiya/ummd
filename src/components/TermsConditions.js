import React from "react";
import donationback from "../assets/Website/Blogs.png";
import vector from "../assets/Vector.png";
import Footer from "./Footer";
import icn1 from "../assets/icn1.png";
import icn2 from "../assets/icn2.png";
import home3 from "../assets/home3.png";
import icn4 from "../assets/icn4.png";

import FAQSection from "./FAQSection";
const TermsConditions = () => {
  return (
    <div className="mt-20">
      <header
        className="relative bg-cover  bg-center bg-no-repeat h-[18vh] lg:h-[65vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${donationback})` }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,76,59,0.9)] to-[rgba(9,76,59,0.2)]"></div>
        <img
          src={vector}
          alt="Vector"
          className="absolute top-24 left-0 h-32"
        /> */}
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Terms & Condition
          </h1>
          <p className="mt-6 text-base md:text-lg font-medium">
            Help Support Our Charities!
          </p>
        </div>
      </header>
      <div className="flex flex-col items-center px-6 py-4 md:py-8">
        {/* Header Section */}
        {/* <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
            Start Donations
          </button> */}
        <h2 className="text-3xl font-bold mt-6 text-center text-gray-900">
          Terms & Condition
        </h2>
        <p className="text-gray-600 text-center max-w-7xl mt-3 text-base leading-relaxed">
          Welcome to Umeedein! These Terms and Conditions govern your use of our
          website, services, and donation platform. You agree to these terms by
          accessing or using our services. If you do not agree, please
          discontinue the use immediately.
        </p>
      </div>
      <div className="max-w-7xl mx-auto  p-2 text-gray-900">

        <section className="mb-6">
          <h2 className="text-xl font-semibold">1. General Terms</h2>

          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
              Umeedein is a non-profit organization committed to social welfare
              through donation collection, distribution, and empowerment
              initiatives.
            </li>{" "}
            <li className="py-2">
              These Terms govern all users, donors, volunteers, partners, and
              beneficiaries engaging with Umeedein’s platform and services.
            </li>
            <li className="py-2">
              We have the right, at any time and without previous notice, to
              update, amend, or change these Terms.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">
            2. Donations and Pickup Services
          </h2>

          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
              Donations made through our platform are strictly in-kind (goods,
              clothing, books, etc.).
            </li>{" "}
            <li className="py-2">
              A <strong>convenience fee</strong> is applicable for each pickup
              service to cover operational expenses. The fee is determined based
              on factors such as distance, volume, weight, and logistics.
            </li>
            <li className="py-2">
              Donors must ensure that the items being donated are in usable
              condition.
            </li>
            <li className="py-2">
              Pickup requests may be rescheduled due to unforeseen
              circumstances, including natural calamities, political
              disruptions, or public holidays.
            </li>
            <li className="py-2">
              Only <strong>one pickup attempt</strong> will be made per request.
            </li>
            <li className="py-2">
              {" "}
              Pickups and deliveries are typically completed within <strong> 10 business
              days</strong>, but timelines may vary.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">
          3. Responsibilities of Donors
          </h2>

          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
            Donors are responsible for properly packing their items for pickup.

            </li>{" "}
            <li className="py-2">
            Donors must be available during the chosen pickup slot. <strong>Cancellation charges</strong> may apply in case of a no-show.
            </li>
            <li className="py-2">
            Any fraudulent, misleading, or illegal donations will result in legal consequences.

            </li>
            <li className="py-2">
            Umeedein reserves the right to reject or discard unusable donations at its sole discretion.
            </li>
            <li className="py-2">
            The donated goods may be photographed or recorded for transparency, promotional, or reporting purposes.

            </li>
         
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">4. Liability and Indemnity</h2>

          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
            Umeedein and its logistics partners are not responsible for any loss, theft, or damage to the donations.
            </li>{" "}
            <li className="py-2">
            We are not liable for any financial or tax benefits related to in-kind donations.

            </li>
            <li className="py-2">
            Donors agree to indemnify Umeedein against any claims, damages, or legal actions arising from the donated goods.

            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">5. Intellectual Property</h2>

          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
            All content on the Umeedein website, including text, images, and branding, is the exclusive property of Umeedein.
            </li>{" "}
            <li className="py-2">
            Unauthorized use, reproduction, or modification of our content is strictly prohibited.

            </li>
            <li className="py-2">
            If you submit intellectual property to us (e.g., images, testimonials), you grant us a non-exclusive right to use it for promotional or operational purposes.

            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">6. Age Requirement</h2>

          <ul className="list-disc list-inside text-gray-700 mt-2 ">
          
            <li className="py-2">
            Using our services requires that you be at least 18 years old. In the presence of an adult, minors can make donations.


            </li>
        
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">7. Third-Party Links and Services</h2>

          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
            Our website may contain links to third-party platforms. We are not responsible for the content, policies, or practices of these external sites.

            </li>{" "}
            <li className="py-2">
            Third-party logistics partners handle pickups and deliveries on behalf of Umeedein.

            </li>
    
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">8. Cancellation and Refund Policy</h2>

          <ul className="list-disc list-inside text-gray-700 mt-2 ">
            <li className="py-2">
            Pickup requests can be cancelled <strong>36 hours prior</strong> to the scheduled slot with applicable charges:

            </li>{" "}
            <li className="py-1 pb-2 ml-4 lg:ml-10">
              <strong>More than 36 hours prior:</strong>  20% of the order value or INR 300 (whichever is higher), max INR 850.


            </li>
            <li className="py-1 ml-4 lg:ml-10">
              <strong>Less than 36 hours prior:</strong> 20% of the order value or INR 300 (whichever is higher).


            </li>
            <li className="py-2">
            If a pickup request is cancelled by Umeedein due to operational constraints, the convenience fee will be refunded within <strong>7 business days</strong>.

            </li>
            <li className="py-2">
            No refund will be issued for failed pickups due to the donor’s unavailability or incorrect address.


            </li>
    
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold">CONTACT US</h2>
          <p className="text-justify text-gray-700">
            For questions regarding this Privacy Policy, contact us at:<br></br>
            {/* <b>Umeedein</b><br></br> */}
           <b> info@umeedein.com</b><br></br>
          <p className="pt-3">  This Privacy Policy is tailored for Umeedein and ensures compliance
          with relevant data protection laws in India.</p>
          </p>
        </section>

      </div>
      <div>
        <div className="bg-[#094C3B] relative h-80 md:h-96 text-white mt-0 md:mt-10 flex flex-col items-center justify-center text-center px-6">
          {/* Icons */}
          <img
            src={icn4}
            alt="vector"
            className="absolute top-4 left-4 w-16 h-16 md:w-28 md:h-28"
          />
          <img
            src={icn2}
            alt="icon1"
            className="absolute top-0 right-0 w-16 h-16 md:w-28 md:h-28"
          />
          <img
            src={icn1}
            alt="icon2"
            className="absolute bottom-0 left-20 w-16 h-16 md:w-24 md:h-24"
          />
          <img
            src={home3}
            alt="#"
            className="absolute bottom-0 right-4 w-12 h-14 md:w-24 md:h-24"
          />

          {/* Centered Content */}
          <div className="max-w-2xl">
            <p className="text-4xl font-semibold">
              Subscribe to our Newsletter
            </p>
            <p className="text-base mx-2 md:mx-10 mt-6">
              Subscribe to our newsletter to stay updated with the latest news,
              exclusive content, and special offers! Join our community and be
              the first to know about exciting events and opportunities. Don’t
              miss out—sign up today!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
