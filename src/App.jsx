import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import Locations from "./pages/Locations.jsx";
import {
  DentalPlans,
  Insurance,
  PaymentFinancing,
} from "./pages/PatientPages.jsx";
import { About, Leadership, Technology } from "./pages/AboutPages.jsx";
import { DentistProfile, Dentists } from "./pages/DentistPages.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Careers from "./pages/Careers.jsx";
import Book from "./pages/Book.jsx";
import Contact from "./pages/Contact.jsx";
import { Accessibility, NotFound, Privacy } from "./pages/LegalPages.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/patients/insurance" element={<Insurance />} />
        <Route path="/patients/payment-financing" element={<PaymentFinancing />} />
        <Route path="/patients/dental-plans" element={<DentalPlans />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/dentists" element={<Dentists />} />
        <Route path="/about/dentists/:slug" element={<DentistProfile />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/technology" element={<Technology />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
