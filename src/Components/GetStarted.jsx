function GetStarted() {
  return (
    <section
      id="contact"
      className="bg-[#1e293b] text-white py-12 px-10 min-h-[400px]"
    >
      <h2 className="text-[2.074rem] font-bold mb-8 text-blue-400 text-center tracking-tight">
        Get Started
      </h2>

      <div className="max-w-[1000px] mx-auto">
        <p className="text-center mb-8">
          Ready to transform your clinical documentation process? Contact our
          team to learn how Clin Technologies can be tailored to your specific
          healthcare setting.
        </p>

        <div className="max-w-[600px] mx-auto bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-[rgba(96,165,250,0.2)]">
          <div className="mt-8 text-center text-slate-400">
            <p>
              Or reach us directly via email at{" "}
              <a
                href="mailto:support@clintechso.com"
                className="text-blue-400 hover:underline"
              >
                support@clintechso.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-5 mt-[30px]">
          <a
            href="/login"
            className="inline-block py-4 px-8 rounded-full font-semibold border-2 border-blue-500 text-white hover:bg-blue-500/10 transition-all duration-300 shadow-md"
          >
            Login
          </a>
          <a
            href="/signup"
            className="inline-block py-4 px-8 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Signup
          </a>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
