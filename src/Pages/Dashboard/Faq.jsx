function Faq() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 h-[calc(100vh-175px)] overflow-y-auto ">
      <h2 className="text-center text-xl font-semibold mb-6">FAQ</h2>

      {/* FAQ Item 1 */}
      <div className="bg-white dark:bg-gray-700 border-2 border-black dark:border-white rounded-lg p-6 mb-4">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Is Clin Technologies HIPAA compliant?
          </h3>
          <span className="text-2xl text-gray-500 dark:text-white">+</span>
        </div>
        <div className="mt-4 text-sm text-gray-700 dark:text-white leading-relaxed">
          Yes, all of our AI-powered solutions are fully HIPAA compliant. We
          follow a security-first architecture with comprehensive encryption (at
          rest and in transit), zero-trust principles, and role-based access
          controls to protect patient data. We also offer Business Associate
          Agreements (BAAs) for added assurance.
        </div>
      </div>

      {/* FAQ Item 2 */}
      <div className="bg-white dark:bg-gray-700 border-2 border-black dark:border-white rounded-lg p-6 mb-4">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Can I integrate Clin Technologies with my existing EMR system?
          </h3>
          <span className="text-2xl text-gray-500 dark:text-white">+</span>
        </div>
        <div className="mt-4 text-sm text-gray-700 dark:text-white leading-relaxed">
          Absolutely. Our AI platform is built with seamless EMR integration in
          mind. Once set up, the AI-generated documentation is automatically
          formatted to match your system's requirements, streamlining your
          workflow and minimizing manual entry.
        </div>
      </div>

      {/* FAQ Item 3 */}
      <div className="bg-white dark:bg-gray-700 border-2 border-black dark:border-white rounded-lg p-6 mb-4">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            How does the AI personalize my documentation process?
          </h3>
          <span className="text-2xl text-gray-500 dark:text-white">+</span>
        </div>
        <div className="mt-4 text-sm text-gray-700 dark:text-white leading-relaxed">
          Our system includes a Learning Mode that adapts to your specific
          workflow and preferences over time. The AI refines its understanding
          based on your feedback, ensuring highly accurate and customized output
          tailored to your specialty and charting habits.
        </div>
      </div>

      {/* FAQ Item 4 */}
      <div className="bg-white dark:bg-gray-700 border-2 border-black dark:border-white rounded-lg p-6 mb-4">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            What if the AI-generated documentation isn't accurate?
          </h3>
          <span className="text-2xl text-gray-500 dark:text-white">+</span>
        </div>
        <div className="mt-4 text-sm text-gray-700 dark:text-white leading-relaxed">
          <p>
            You can always review and adjust the output. If something doesn’t
            align with your expectations, simply provide feedback through the
            system. Our AI learns continuously to improve accuracy and precision
            over time.
          </p>
          <br />
          <ul className="list-disc pl-6 space-y-1">
            <li>
              “The SOAP note was too generic. Please include more detail about
              the patient's symptoms and clinical reasoning.”
            </li>
            <li>
              “This chart includes terms we don’t use in our clinic. Please
              adjust the language to match our documentation style.”
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ Item 5 */}
      <div className="bg-white dark:bg-gray-700 border-2 border-black dark:border-white rounded-lg p-6 mb-4">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            What solutions does Clin Technologies offer?
          </h3>
          <span className="text-2xl text-gray-500 dark:text-white">+</span>
        </div>
        <div className="mt-4 text-sm text-gray-700 dark:text-white leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>TranscriptX:</strong> Accurate medical transcriptions of
              clinical encounters.
            </li>
            <li>
              <strong>Chartwright:</strong> Converts raw input into fully
              formatted charts with customization.
            </li>
            <li>
              <strong>Redactify:</strong> Redacts patient identifiers to support
              compliance and data protection.
            </li>
            <li>
              <strong>Validify:</strong> Reviews charts for coding accuracy,
              documentation gaps, and regulatory compliance.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ Item 6 */}
      <div className="bg-white dark:bg-gray-700 border-2 border-black dark:border-white rounded-lg p-6 mb-4">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Who can use Clin Technologies?
          </h3>
          <span className="text-2xl text-gray-500 dark:text-white">+</span>
        </div>
        <div className="mt-4 text-sm text-gray-700 dark:text-white leading-relaxed">
          Clin Technologies is ideal for healthcare professionals across all
          specialties — from solo practitioners and primary care providers to
          large clinics, hospitals, and behavioral health practices. If you
          document patient care, Clin can help.
        </div>
      </div>

      {/* FAQ Item 7 */}
      <div className="bg-white dark:bg-gray-700 border-2 border-black dark:border-white rounded-lg p-6 mb-4">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Do you offer a free trial?
          </h3>
          <span className="text-2xl text-gray-500 dark:text-white">+</span>
        </div>
        <div className="mt-4 text-sm text-gray-700 dark:text-white leading-relaxed">
          Yes! We encourage healthcare providers to try Clin Technologies for
          FREE to experience how our AI transforms clinical documentation. Just
          click “Signup” on our website to get started.
        </div>
      </div>

      {/* FAQ Item 8 */}
      <div className="bg-white dark:bg-gray-700 border-2 border-black dark:border-white rounded-lg p-6 mb-4">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            I have another question. How can I contact support?
          </h3>
          <span className="text-2xl text-gray-500 dark:text-white">+</span>
        </div>
        <div className="mt-4 text-sm text-gray-700 dark:text-white leading-relaxed">
          We're happy to help! Please reach out through our support page or
          email us directly at <strong>support@clintechso.com</strong>. Our team
          is ready to assist with setup, customization, or general inquiries.
        </div>
      </div>
    </div>
  );
}

export default Faq;
