import React, { useState } from "react";

function HelpSupport() {
  const [formData, setFormData] = useState({
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Support request sent!");
    setFormData({ email: "", description: "" });
  };
  return (
    <div className="flex-1 overflow-hidden px-6 md:px-20 py-4 text-white bg-gray-900">
      <h2 className="text-xl font-semibold mb-6">Help & Support</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Enter your query or feedback"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="w-40 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default HelpSupport;
