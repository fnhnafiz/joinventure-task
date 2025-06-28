function OurSolution() {
  return (
    <section id="features" className="py-12 px-6 md:py-20 bg-[#0F172A]">
      <h2 className="text-[2rem] font-bold text-blue-400 text-center mb-6">
        Our Solutions
      </h2>

      <div className="text-white text-base max-w-2xl mx-auto text-center mb-10 leading-relaxed">
        <p>
          Our comprehensive suite of AI-powered solutions transforms every
          aspect of healthcare documentation:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] w-full mx-auto">
        {/* Validify */}
        <div className="bg-[rgba(30,58,138,0.3)] border-t-[3px] border-green-500 rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-md hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[rgba(16,185,129,0.1)] text-green-500 text-[32px] mb-5 hover:scale-110 transition-transform duration-300">
            ✓
          </div>
          <h3 className="text-[1.44rem] font-semibold text-blue-400 mb-4">
            Validify
          </h3>
          <p className="text-white text-[1rem] leading-[1.6]">
            Mitigate compliance risk with powerful AI that optimizes chart
            reviews for accuracy, integrity, coding, and compliance. Validify
            automatically identifies documentation gaps, ensures coding
            accuracy, and maintains regulatory compliance.
          </p>
        </div>

        {/* Redactify */}
        <div className="bg-[rgba(30,58,138,0.3)] border-t-[3px] border-yellow-500 rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-md hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[rgba(245,158,11,0.1)] text-yellow-500 text-[32px] mb-5 hover:scale-110 transition-transform duration-300">
            ⊘
          </div>
          <h3 className="text-[1.44rem] font-semibold text-blue-400 mb-4">
            Redactify
          </h3>
          <p className="text-white text-[1rem] leading-[1.6]">
            Effortlessly redact HIPAA identifiers from text, documents, and
            structured data with Redactify – automating your compliance
            workflow. Protect sensitive patient information while maintaining
            clinical context.
          </p>
        </div>

        {/* TranscriptX */}
        <div className="bg-[rgba(30,58,138,0.3)] border-t-[3px] border-blue-500 rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-md hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[rgba(59,130,246,0.1)] text-blue-500 text-[32px] mb-5 hover:scale-110 transition-transform duration-300">
            🗣️
          </div>
          <h3 className="text-[1.44rem] font-semibold text-blue-400 mb-4">
            TranscriptX
          </h3>
          <p className="text-white text-[1rem] leading-[1.6]">
            Spend less time documenting. TranscriptX dictates highly accurate
            medical transcriptions of patient encounters into text,
            understanding complex medical terminology and clinical context for
            superior accuracy.
          </p>
        </div>

        {/* Chartwright */}
        <div className="bg-[rgba(30,58,138,0.3)] border-t-[3px] border-pink-500 rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-md hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[rgba(236,72,153,0.1)] text-pink-500 text-[32px] mb-5 hover:scale-110 transition-transform duration-300">
            📝
          </div>
          <h3 className="text-[1.44rem] font-semibold text-blue-400 mb-4">
            Chartwright
          </h3>
          <p className="text-white text-[1rem] leading-[1.6]">
            Your best friend with charting – turn any normal text into a
            high-quality chart, delivered exactly how healthcare professionals
            need it with extensive customization options to match your workflow
            and documentation standards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurSolution;
