// import React from "react";
// import <ProjectRoutes></ProjectRoutes> from "./Routes";
// import Header from "components/Header";

// function App() {
//   return 
//   <Header className="flex items-center justify-center md:px-5 w-full" />;
//   <Routes />;
// }

// export default App;

import React from 'react'
import Header from "components/Header";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPagePage from "pages/LandingPage";
import NotFound from "pages/NotFound";
import ContactUs from "pages/ContactUs";
// import BlogDetails from "pages/BlogDetails";
import Blog from 'pages/Blog';
import BloggerDetails from "pages/BloggerDetails";
import EventList from 'pages/EventList';
import JobOpportunitiesPage from 'pages/JobOpportunitiesPage';


function App() {
  return (
    <div>
      <React.Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<LandingPagePage/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/Home" element={<LandingPagePage/>}></Route>
          <Route path="/podcasts" element={<BloggerDetails />} />
          <Route path="/blogs" element={<Blog  />}></Route>
          <Route path="/contactUs" element={<ContactUs />} ></Route>
          <Route path="/EventList" element={<EventList />} ></Route>
          <Route path="/job" element={<JobOpportunitiesPage/>} ></Route>
          {/* <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route> */}
        </Routes>
      
    </BrowserRouter>
    </React.Suspense>  
    
    </div>
  )
}

export default App