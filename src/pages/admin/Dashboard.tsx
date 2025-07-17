import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {/* Metric Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* TODO: Map metric cards here */}
        <div className="border rounded p-4 text-center text-gray-400">Total Products</div>
        <div className="border rounded p-4 text-center text-gray-400">Total Transactions</div>
        <div className="border rounded p-4 text-center text-gray-400">Active Users</div>
        <div className="border rounded p-4 text-center text-gray-400">Latest Blog Posts</div>
      </div>
      {/* Interactive Charts Section */}
      <div className="mb-8 border rounded p-4 bg-white dark:bg-gray-900">
        {/* TODO: Add interactive charts/graphs */}
        <div className="text-gray-400">Charts coming soon...</div>
      </div>
      {/* Activity Feed Section */}
      <div className="mb-8 border rounded p-4 bg-white dark:bg-gray-900">
        <h2 className="font-semibold mb-2">Recent Activity</h2>
        {/* TODO: Show recent activity feed */}
        <div className="text-gray-400">No recent activity.</div>
      </div>
      {/* Notification Area */}
      <div className="mb-8 border rounded p-4 bg-white dark:bg-gray-900">
        <h2 className="font-semibold mb-2">Notifications</h2>
        {/* TODO: Show notifications */}
        <div className="text-gray-400">No notifications.</div>
      </div>
      {/* Quick Access Links */}
      <div className="mb-8 flex gap-4">
        {/* TODO: Add quick access buttons/links */}
        <button className="px-4 py-2 bg-primary text-white rounded">Add New Product</button>
        <button className="px-4 py-2 bg-primary text-white rounded">View All Transactions</button>
      </div>
      {/* TODO: Add dashboard personalization/widgets */}
    </div>
  );
};

export default Dashboard; 