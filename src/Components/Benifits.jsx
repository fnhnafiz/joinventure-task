import { Link } from "react-router-dom";

function Benifits() {
  return (
    <section
      id="benefits"
      className="bg-[#1e293b] text-white py-12 px-10 min-h-[400px]"
    >
      <h2 className="text-[2.074rem] font-bold mb-8 text-blue-400 text-center tracking-tight">
        Benefits
      </h2>

      <div className="max-w-[1000px] mx-auto">
        <p className="mb-4">
          Healthcare providers using Clin Technologies solutions report:
        </p>

        <ul className="list-disc pl-8 mb-8 space-y-2">
          <li>Reduction in documentation time by 40–60%</li>
          <li>Improved work-life balance with less after-hours charting</li>
          <li>Enhanced patient interaction due to less focus on note-taking</li>
          <li>More comprehensive and consistent clinical documentation</li>
          <li>Reduced risk of documentation errors and omissions</li>
        </ul>

        <div className="flex flex-col gap-4 mt-8 items-center md:flex-row md:justify-center">
          <Link
            to="/login"
            className="px-8 py-4 text-white rounded-full border-2 border-blue-500 shadow-md hover:bg-[rgba(59,130,246,0.1)] transition duration-300 text-center"
          >
            Login
          </Link>
          <Link
            href="https://super-liger-e3b5ad.netlify.app/signUp"
            className="px-8 py-4 text-white rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
          >
            Signup
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Benifits;
