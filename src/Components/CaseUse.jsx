function CaseUse() {
  return (
    <section
      id="case-use"
      className="bg-[#0f172a] text-white py-12 px-10 min-h-[400px]"
    >
      <h2 className="text-[2.074rem] font-bold mb-8 text-blue-400 text-center tracking-tight">
        Case Use
      </h2>

      <div className="max-w-[1000px] mx-auto">
        <p className="text-base">
          See how healthcare providers across specialties are transforming their
          practice with Clin Technologies:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] mx-auto mt-8 w-full">
        {/* Card 1 */}
        <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-[1.44rem] font-semibold text-blue-400 mb-4">
            Primary Care
          </h3>
          <p>
            Dr SJ M.D reduced her documentation time by 52%, allowing her to see
            3 more patients daily while finishing her charts before leaving the
            office.
          </p>
          <p className="italic border-l-4 border-[rgba(96,165,250,0.3)] pl-4 mt-6 mb-2">
            "This AI tool streamlines a tedious process, reduces 'click
            fatigue,' and helps me reclaim some sanity."
          </p>
          <p className="italic text-right text-slate-400 text-sm font-medium">
            — Dr. SJ, MD
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-[1.44rem] font-semibold text-blue-400 mb-4">
            Emergency Medicine
          </h3>
          <p>
            Our ED department implemented Clin Tech, resulting in more thorough
            documentation and a 70% decrease in chart completion time during
            high-volume periods. Our nurses love it.
          </p>
          <p className="italic text-right text-slate-400 text-sm font-medium mt-3">
            — Emergency Department (ED) Nurse Manager
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-[1.44rem] font-semibold text-blue-400 mb-4">
            Behavioral Health
          </h3>
          <p className="italic border-l-4 border-[rgba(96,165,250,0.3)] pl-4 mb-2">
            "Chartwright has been transformative for our clinic. Our therapists
            were drowning in documentation; We've slashed average charting time
            to <strong>under 3 minutes per patient</strong>, freeing up hours
            for direct care. More importantly, we've seen a significant{" "}
            <strong>
              reduction in documentation errors and compliance flags
            </strong>
            . It's not just faster; it's <em>smarter</em> documentation."
          </p>
          <p className="italic text-right text-slate-400 text-sm font-medium">
            — Clinical Director, Behavioral Health Practice
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-[1.44rem] font-semibold text-blue-400 mb-4">
            Case Management
          </h3>
          <p className="italic border-l-4 border-[rgba(96,165,250,0.3)] pl-4 mb-2">
            "Honestly, with the number of patients I manage, documentation felt
            like a constant, losing battle. But this AI feels like getting an
            assistant. It takes my detailed notes and <strong>instantly</strong>{" "}
            creates the clear, customized charts I need. I'm getting hours back
            each week – hours I can now spend directly with patients, tackling
            barriers, not just typing."
          </p>
          <p className="italic text-right text-slate-400 text-sm font-medium">
            — Social Worker/Case Manager
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseUse;
