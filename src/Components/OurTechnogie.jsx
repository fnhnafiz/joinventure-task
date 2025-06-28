function OurTechnogie() {
  return (
    <section
      id="technology"
      className="bg-[#0f172a] text-white py-12 px-10 md:py-24 min-h-[400px]"
    >
      <h2 className="text-[2.074rem] font-bold mb-8 text-blue-400 text-center tracking-tight">
        Our Technology
      </h2>

      <div className="max-w-[1000px] mx-auto">
        <p className="mb-4 text-base leading-[1.6]">
          At Clin Technologies, we've built our platform on groundbreaking AI
          technology specifically designed for healthcare. Our solutions use the
          latest advancements in natural language processing and machine
          learning to create a system that truly understands the complexities of
          medical documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] w-full mx-auto mt-[50px]">
        {/* NLP Card */}
        <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-[35px] border border-[rgba(96,165,250,0.2)] shadow-md hover:-translate-y-2 transition-all duration-500">
          <div className="flex justify-center items-center w-[70px] h-[70px] bg-[rgba(59,130,246,0.1)] rounded-full mb-5 hover:scale-110 transition-transform duration-300">
            <div className="text-blue-400 text-[30px]">🧠</div>
          </div>
          <h3 className="text-[1.728rem] font-semibold text-blue-400 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
            Sophisticated Natural Language Processing
          </h3>
          <p className="text-[1rem] leading-[1.5]">
            At the core of our platform is an advanced foundation model. This
            enables our system to grasp the nuances of clinical conversations —
            understanding context, recognizing intent, and accurately
            interpreting medical terminology. This deep comprehension allows the
            AI to generate clear, concise, and contextually relevant medical
            notes automatically.
          </p>
        </div>

        {/* Learning Mode Card */}
        <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-[35px] border border-[rgba(96,165,250,0.2)] shadow-md hover:-translate-y-2 transition-all duration-500">
          <div className="flex justify-center items-center w-[70px] h-[70px] bg-[rgba(59,130,246,0.1)] rounded-full mb-5 hover:scale-110 transition-transform duration-300">
            <div className="text-blue-400 text-[30px]">🔄</div>
          </div>
          <h3 className="text-[1.728rem] font-semibold text-blue-400 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
            Learning Mode &amp; Personalization
          </h3>
          <p className="text-[1rem] leading-[1.5]">
            Our AI doesn't rely on generic templates. We initiate the process by
            learning directly from your specific cases and workflows. The system
            intelligently refines its understanding and output based on your
            ongoing feedback. With each processed case, its accuracy and
            alignment with your unique clinical documentation needs become
            increasingly precise, ensuring a truly personalized solution.
          </p>
        </div>

        {/* Security Card */}
        <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-[35px] border border-[rgba(96,165,250,0.2)] shadow-md hover:-translate-y-2 transition-all duration-500">
          <div className="flex flex-wrap gap-[15px] mb-5">
            <div className="inline-flex items-center px-4 py-[6px] rounded-full border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.1)] hover:bg-[rgba(16,185,129,0.2)] transition-all">
              <span className="text-green-500 text-[18px] mr-[10px]">🔒</span>
              <span>HIPAA COMPLIANT</span>
            </div>
            <div className="inline-flex items-center px-4 py-[6px] rounded-full border border-[rgba(79,70,229,0.3)] bg-[rgba(79,70,229,0.1)] hover:bg-[rgba(79,70,229,0.2)] transition-all">
              <span className="text-indigo-300 text-[18px] mr-[10px]">📝</span>
              <span>BUSINESS ASSOCIATE AGREEMENT</span>
            </div>
          </div>
          <h3 className="text-[1.728rem] font-semibold text-blue-400 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
            Robust Data Privacy &amp; Security
          </h3>
          <p className="text-[1rem] leading-[1.5]">
            Protecting sensitive health information is paramount. Our AI
            solutions are architected with a security-first approach,
            incorporating principles like 'zero trust'. We utilize robust
            security measures, including comprehensive encryption (both at rest
            and in transit) and strict, role-based access controls, to ensure
            data integrity and confidentiality, limiting access exclusively to
            authorized personnel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurTechnogie;
