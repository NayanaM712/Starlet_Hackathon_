// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NotFound from "pages/NotFound";
// const BloggerDetails = React.lazy(() => import("pages/BloggerDetails"));
// const ContactUs = React.lazy(() => import("pages/ContactUs"));
// const BlogDetails = React.lazy(() => import("pages/BlogDetails"));
// const LandingPage = React.lazy(() => import("pages/LandingPage"));
// const ProjectRoutes = () => {
//   return (
//     <React.Suspense fallback={<>Loading...</>}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/blogdetails" element={<BlogDetails />} />
//           <Route path="/contactUs" element={<ContactUs />} />
//           <Route path="/bloggerdetails" element={<BloggerDetails />} />
//           <Route path="/Home" element={<LandingPage/>} />
//         </Routes>
//       </Router>
//     </React.Suspense>
//   );
// };
// export default ProjectRoutes;
