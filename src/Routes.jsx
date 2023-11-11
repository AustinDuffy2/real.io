import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Search = React.lazy(() => import("pages/Search"));
const AIPlatform = React.lazy(() => import("pages/AIPlatform"));
const PropertyDetails = React.lazy(() => import("pages/PropertyDetails"));
const Properties = React.lazy(() => import("pages/Properties"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Home1 = React.lazy(() => import("pages/Home1"));
const SignUpScreen = React.lazy(() => import("pages/SignUpScreen"));
const LoginScreen = React.lazy(() => import("pages/LoginScreen"));
const Contact = React.lazy(() => import("pages/Contact"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginscreen" element={<LoginScreen />} />
          <Route path="/signupscreen" element={<SignUpScreen />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/aiplatform" element={<AIPlatform />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
