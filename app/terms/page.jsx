import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-900 text-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg w-full max-w-7xl rounded-lg flex flex-col justify-between mt-10">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center">
            Terms & Conditions
          </h1>
          <div className="flex flex-col lg:flex-row">
            <aside className="lg:w-1/3 lg:pr-8 mb-6 lg:mb-0">
              <p className="mb-4 text-lg sm:text-xl ">
                These Terms and Conditions ("Terms", "Terms and Conditions")
                govern your relationship with{" "}
                <span className="text-grey-900 font-bold">Lupleg</span> (the
                "Service") operated by Lupleg ("us", "we", or "our").
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl">
                1. Introduction
              </h3>
              <p className="mb-4 text-lg sm:text-xl">
                By using lupleg.website you confirm your acceptance of, and
                agree to be bound by, these terms and conditions.
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl">
                2. Agreement to Terms and Conditions
              </h3>
              <p className="mb-4 text-lg sm:text-xl">
                This Agreement takes effect on the date on which you first use
                the lupleg.website application.
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl">
                3. PRO / premium features
              </h3>
              <p className="mb-4 text-lg sm:text-xl">
                You will be able to use all (or some of) the PRO features after
                you purchase a PRO tier. The details of the PRO features are
                available on the premium page.
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl">
                4. Refund Policy
              </h3>
              <p className="mb-4 text-lg sm:text-xl">
                We allow refunds within 14 days of purchase. Contact us via
                email at payment
                <span className="font-bold">@lupleg.website</span> or in our
                Slack Community and we will give you a refund.
              </p>
            </aside>
            <div className="lg:w-2/3 lg:pl-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl">
                5. Product usage
              </h3>
              <p className="mb-4 text-lg sm:text-xl">
                By using lupleg.website, you agree to receive important product
                updates, newsletters, marketing or promotional materials and
                other information that may be of interest to you. You may opt
                out of receiving any, or all, of these communications from us by
                following the unsubscribe link or instructions provided in any
                email we send or by contacting us.
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl">6. Disclaimer</h3>
              <p className="mb-4 text-lg sm:text-xl">
                It is not warranted that Lupleg will meet your requirements or
                that its operation will be uninterrupted or error-free. All
                express and implied warranties or conditions not stated in this
                Agreement (including without limitation, loss of profits, loss
                or corruption of data, business interruption, or loss of
                contracts), so far as such exclusion or disclaimer is permitted
                under the applicable law, are excluded and expressly disclaimed.
                This Agreement does not affect your statutory rights.
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl">
                7. Warranties and Limitation of Liability
              </h3>
              <p className="mb-4 text-lg sm:text-xl">
                lupleg.website does not give any warranty, guarantee, or other
                term as to the quality, fitness for purpose, or otherwise of the
                software. lupleg.website shall not be liable to you by reason of
                any representation (unless fraudulent), or any implied warranty,
                condition or other term, or any duty at common law, for any loss
                of profit or any indirect, special, or consequential loss,
                damage, costs, expenses or other claims (whether caused by
                iCodeThis 's negligence or the negligence of its servants or
                agents or otherwise) which arise out of or in connection with
                the provision of any goods or services by lupleg.website.
                lupleg.website shall not be liable or deemed to be in breach of
                contract by reason of any delay in performing, or failure to
                perform, any of its obligations if the delay or failure was due
                to any cause beyond its reasonable control. Notwithstanding
                contrary clauses in this Agreement, in the event that
                lupleg.website are deemed liable to you for breach of this
                Agreement, you agree that lupleg.website's liability is limited
                to the amount actually paid by you for your services or
                software, which amount calculated in reliance upon this clause.
                You hereby release lupleg.website from any and all obligations,
                liabilities, and claims in excess of this limitation.
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl">8. Changes</h3>
              <p className="mb-4 text-lg sm:text-xl">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material we
                will try to provide at least 30 days notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion. By continuing to access or
                use our Service after those revisions become effective, you
                agree to be bound by the revised terms. If you do not agree to
                the new terms, please stop using the Service.
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl">
                9. Governing Law
              </h3>
              <p className="mb-4 text-lg sm:text-xl">
                These Terms shall be governed and construed in accordance with
                the laws of Zambia (ZM), without regard to its conflict of law
                provisions. Our failure to enforce any right or provision of
                these Terms will not be considered a waiver of those rights. If
                any provision of these Terms is held to be invalid or
                unenforceable by a court, the remaining provisions of these
                Terms will remain in effect. These Terms constitute the entire
                agreement between us regarding our Service, and supersede and
                replace any prior agreements we might have between us regarding
                the Service.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
            <button className="text-black px-6 py-2 sm:px-10 rounded-full font-medium bg-orange-100 text-sm sm:text-base hover:bg-orange-200">
              Accept
            </button>
            <button className="text-white px-6 py-2 sm:px-10 rounded-full font-medium bg-black text-sm sm:text-base hover:bg-orange-200">
              Decline
            </button>
          </div>
          <p className="text-center mt-8 font-bold">
            Last Updated: 30 July, 2024
          </p>
        </div>
      </div>
    </div>
  );
}
