function Chat() {
  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 dark:text-white min-w-0">
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-col h-[calc(100vh-26px)] lg:h-[calc(100vh-96px)]">
          <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 dark:text-white overflow-hidden relative">
            <div className="absolute left-1/4 lg:top-6 top-8 grid grid-cols-2 lg:flex lg:space-x-4 gap-4">
              <button className="py-2 px-4 border rounded-lg text-white bg-blue-500 border-gray-300 hover:bg-gray-100 focus:outline-none">
                Chartwright
              </button>
              <button className="py-2 px-4 border rounded-lg text-black bg-white border-gray-300 hover:bg-gray-100 focus:outline-none">
                TranscriptX
              </button>
              <button className="py-2 px-4 border rounded-lg text-black bg-white border-gray-300 hover:bg-gray-100 focus:outline-none">
                Redactify
              </button>
              <button className="py-2 px-4 border rounded-lg text-black bg-white border-gray-300 hover:bg-gray-100 focus:outline-none">
                Validify
              </button>
            </div>

            <div className="chat-container flex-1 overflow-y-auto p-4 space-y-4 mt-8">
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="p-8 text-center">
                  <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#15427A]">
                    Hello, Nostrum sit vel vol
                  </h1>
                  <p className="text-2xl">How Can I Help You Today</p>
                </div>
              </div>
            </div>

            <form className="p-4 flex items-center border-t sticky bottom-0 bg-white dark:bg-gray-800">
              <button
                type="button"
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 relative"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-3xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74"
                  ></path>
                </svg>
              </button>

              <input
                type="file"
                className="hidden"
                accept=".txt,.doc,.docx,.pdf,.html,.jpg,.jpeg,.png,.gif,.svg,.webp"
              />

              <textarea
                placeholder="Type your message (Shift + Enter for new line)"
                autoComplete="off"
                rows="1"
                className="flex-1 mx-2 p-3 py-5 border dark:border-gray-600 dark:placeholder:text-gray-100 rounded-lg resize-none focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:text-white placeholder:text-sm text-black"
                style={{ overflow: "hidden" }}
              ></textarea>

              <button
                type="button"
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 384 512"
                  className="text-2xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M192 0C139 0 96 43 96 96v160c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4v33.6h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c85.8-11.7 152-85.3 152-174.4v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128v-40z"></path>
                </svg>
              </button>

              <button
                type="submit"
                className="ml-2 p-3 rounded-full cursor-pointer text-white"
                disabled
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-3xl text-black dark:text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m16 464 480-208L16 48v160l320 48-320 48z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
