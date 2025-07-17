import React from "react";

const UserProfile: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      {/* Basic Info Section */}
      <div className="mb-6 border rounded p-4 bg-white dark:bg-gray-900">
        <h2 className="font-semibold mb-2">Basic Information</h2>
        {/* TODO: Add form for name, email, phone, etc. */}
        <div className="text-gray-400">Profile form coming soon...</div>
      </div>
      {/* Account Settings Section */}
      <div className="mb-6 border rounded p-4 bg-white dark:bg-gray-900">
        <h2 className="font-semibold mb-2">Account Settings</h2>
        {/* TODO: Add password change, 2FA, notification preferences */}
        <div className="text-gray-400">Account settings coming soon...</div>
      </div>
      {/* Activity Log Section */}
      <div className="mb-6 border rounded p-4 bg-white dark:bg-gray-900">
        <h2 className="font-semibold mb-2">Activity Log</h2>
        {/* TODO: Show user activity log */}
        <div className="text-gray-400">No activity yet.</div>
      </div>
      {/* Address Management Section */}
      <div className="mb-6 border rounded p-4 bg-white dark:bg-gray-900">
        <h2 className="font-semibold mb-2">Address Management</h2>
        {/* TODO: Add address management UI */}
        <div className="text-gray-400">Address management coming soon...</div>
      </div>
      {/* TODO: Add social integration, etc. */}
    </div>
  );
};

export default UserProfile; 