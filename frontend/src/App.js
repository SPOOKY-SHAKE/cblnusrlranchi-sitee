import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DevAdminPanel from "./components/DevAdminPanel";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesDetailPage from "./pages/ServicesDetailPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import GetStartedPage from "./pages/GetStartedPage";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesDetailPage />} />
            <Route path="/service/:id" element={<ServiceDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
          </Routes>
        </main>
        <Footer />
        <DevAdminPanel />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
