import React from "react";
import { SignIn } from "@clerk/nextjs";

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <SignIn path="/login" routing="path" signUpUrl="/sign-up" afterSignInUrl="/admin/dashboard" afterSignUpUrl="/admin/dashboard" />
      </div>
    </div>
  );
};

export default Login; 