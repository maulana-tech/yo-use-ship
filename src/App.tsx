
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import RequireAuth from "./pages/admin/RequireAuth";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import SignUp from "./pages/SignUp";
import AdminLayout from "./pages/admin/Index";
import Product from "./pages/admin/Product";
import Payment from "./pages/admin/Payment";
import BlogWrite from "./pages/admin/BlogWrite";
import UserProfile from "./pages/admin/UserProfile";

const queryClient = new QueryClient();

function SyncUserToBackend() {
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkId: user.id,
          username: user.username,
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          image: user.imageUrl,
          bio: user.publicMetadata?.bio || "",
          location: user.publicMetadata?.location || "",
          website: user.publicMetadata?.website || "",
        }),
      });
    }
  }, [user]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SignedIn>
        <SyncUserToBackend />
      </SignedIn>
      {/* Clerk Auth Header */}
      <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '1rem', gap: '1rem', borderBottom: '1px solid #eee' }}>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      {/* Main App Content */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/admin" element={<RequireAuth><AdminLayout /></RequireAuth>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="pembayaran" element={<Payment />} />
            <Route path="blogging-write" element={<BlogWrite />} />
            <Route path="user-profile" element={<UserProfile />} />
            {/* Add more admin routes here */}
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
