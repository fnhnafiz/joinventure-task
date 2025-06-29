function Subscription() {
  return (
    <div className="px-4 py-12 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Manage Subscription
      </h1>

      <div className="max-w-2xl mx-auto">
        <div className="p-6 border-2 border-blue-500 bg-white dark:bg-gray-700 rounded-lg">
          {/* Input Group */}
          <div className="grid gap-6">
            <div className="p-4 bg-gray-100 dark:bg-gray-600 border border-gray-300 rounded-lg">
              <input
                type="text"
                value="individual"
                placeholder="Purchase Date"
                disabled
                className="w-full bg-transparent outline-none text-gray-900 dark:text-white"
              />
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-600 border border-gray-300 rounded-lg">
              <input
                type="text"
                value="July 05, 2025 10:58:38"
                placeholder="Expiry Date"
                disabled
                className="w-full bg-transparent outline-none text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <button className="w-full py-3 text-lg font-semibold text-white rounded-lg bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition">
              Upgrade Subscription
            </button>
            <button className="w-full py-3 text-lg font-semibold text-white rounded-lg bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 transition">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
