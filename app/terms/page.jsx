import React from "react";

export default function TermsPage() {
  return (
    <div
      className="bg-custom-bg bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url(/back.jpg)" }}
    >
      <div
        className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg flex flex-col max-w-full mx-4 sm:mx-6 lg:mx-auto"
        style={{
          width: "90vw",
          maxWidth: "1200px",
          minHeight: "80vh",
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-600 mb-4">
          Terms and Conditions
        </h1>
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">
          These Terms and Conditions ("Terms", "Terms and Conditions") govern
          your relationship with Lupleg (the "Service" )operated by{" "}
          <span className="text-green-900 font-bold">Lupleg</span>
          ("us","we",or "our").
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2">
          1. Introduction
        </h3>
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">
          By using lupleg.website, you confirm your acceptance of, and agree to
          be bound by, these terms and conditions.
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2">
          2. Agreement to Terms and Conditions
        </h3>
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">
          This Agreement takes effect on the date on which you first use the
          lupleg.website application.
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2">
          3. PRO / Premium Features
        </h3>
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">
          You will be able to use all (or some) of the PRO features after you
          purchase a PRO tier. Details are available on the PRO page.
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2">
          4. Refund Policy
        </h3>
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">
          We allow refunds within 14 days of purchase. Contact us at <br />
          <b>info@lupleg.website</b> or in our Discord channel for a refund.
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2">
          5. Product Usage
        </h3>
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">
          By using lupleg.website, you agree to receive important updates,
          newsletters, and promotional materials. You can opt out by following
          the unsubscribe link or contacting us.
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2">
          6. Disclaimer
        </h3>
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">
          Lupleg does not warrant that the service will meet your requirements
          or that its operation will be uninterrupted or error-free. All
          warranties not stated in this Agreement are excluded.
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2">
          7. Warranties and Limitation of Liability
        </h3>
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">
          Lupleg is not liable for any indirect, special, or consequential loss
          or damage. Liability is limited to the amount paid for services.
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2">
          8. Changes
        </h3>
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">
          We reserve the right to modify these Terms. Material changes will be
          notified at least 30 days prior to taking effect.
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2">
          9. Governing Law
        </h3>
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">
          These Terms are governed by the laws of Zambia (ZM). If any provision
          is held to be invalid, the remaining provisions will remain in effect.
          <span className="font-bold text-black"> Last updated:</span> 04 June
          2024.
        </p>
      </div>
    </div>
  );
}
