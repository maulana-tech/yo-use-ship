import React from "react";

const Payment: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payment Management</h1>
      {/* Transaction Table Placeholder */}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Map transaction data here */}
            <tr>
              <td className="px-4 py-2 text-center text-gray-400" colSpan={4}>No transactions yet.</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* TODO: Add payment method management, notifications, etc. */}
    </div>
  );
};

export default Payment; 