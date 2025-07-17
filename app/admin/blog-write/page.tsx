import React from "react";

const BlogWrite: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blogging Write</h1>
      {/* WYSIWYG Editor Placeholder */}
      <div className="mb-6 border rounded p-4 bg-white dark:bg-gray-900">
        {/* TODO: Integrate WYSIWYG editor */}
        <div className="text-gray-400">Editor coming soon...</div>
      </div>
      {/* Article List Placeholder */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Your Articles</h2>
        {/* TODO: Map articles here */}
        <div className="border rounded p-4 text-center text-gray-400">No articles yet.</div>
      </div>
      {/* TODO: Add category/tag management, media upload, scheduling, etc. */}
    </div>
  );
};

export default BlogWrite; 