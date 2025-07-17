import React from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';

const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return null;
  if (!isSignedIn) return <RedirectToSignIn />;
  return <>{children}</>;
};

export default RequireAuth; 