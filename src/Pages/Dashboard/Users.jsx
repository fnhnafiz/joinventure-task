import { useState } from "react";

function Users() {
  const [email, setEmail] = useState("");

  const handleInvite = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Invite sent to: ${email}`);
      setEmail("");
    }
  };
  return (
    <div className="min-h-screen px-6 py-8 md:px-20 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      <form
        onSubmit={handleInvite}
        className="flex flex-col md:flex-row gap-4 mb-8"
      >
        <input
          type="email"
          placeholder="Invite others by email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
        />
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-2 text-white font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-lg transition"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 640 512"
            className="text-xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8..." />
          </svg>
          Invite
        </button>
      </form>

      <div className="text-center p-8 bg-white dark:bg-gray-700 rounded-lg">
        <p className="text-gray-500 dark:text-gray-300">
          No users have been invited yet.
        </p>
      </div>
    </div>
  );
}

export default Users;
