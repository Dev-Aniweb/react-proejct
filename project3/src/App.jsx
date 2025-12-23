// import React from "react";

// function App() {
//   const data_arr = [
//     { job_title: "Graphic Designer", job_price: "$45/hr", job_description: "Creates visual content such as logos, banners, and marketing materials using design software." },
//     { job_title: "Web Developer", job_price: "$60/hr", job_description: "Builds and maintains websites using HTML, CSS, JavaScript, and backend frameworks." },
//     { job_title: "Content Writer", job_price: "$30/hr", job_description: "Writes articles, blog posts, and marketing copy tailored to specific audiences." },
//     { job_title: "Virtual Assistant", job_price: "$25/hr", job_description: "Provides remote administrative support including scheduling, email management, and data entry." },
//     { job_title: "Social Media Manager", job_price: "$40/hr", job_description: "Manages social media accounts, creates posts, and analyzes performance metrics." },
//     { job_title: "Mobile App Developer", job_price: "$70/hr", job_description: "Designs and develops mobile applications for iOS and Android platforms." },
//     { job_title: "SEO Specialist", job_price: "$50/hr", job_description: "Improves website ranking through keyword research, content optimization, and technical SEO." },
//     { job_title: "Video Editor", job_price: "$55/hr", job_description: "Edits and produces video content for advertising, social media, and professional projects." },
//     { job_title: "Data Analyst", job_price: "$65/hr", job_description: "Analyzes datasets to provide insights, create reports, and support business decision-making." },
//     { job_title: "Customer Support Specialist", job_price: "$20/hr", job_description: "Assists customers via chat, email, or phone by resolving issues and answering inquiries." }
//   ];

//   return (
//     <>
//       {data_arr.map((job) => (
//         <div >
//           <h2>{job.job_title}</h2>
//           <h4>{job.job_price}</h4>
//           <p>{job.job_description}</p>
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;



import React from "react";
import JobCard from "./JobCard";

function App() {
  const data_arr = [
    { job_title: "Graphic Designer", job_price: "$45/hr", job_description: "Creates visual content such as logos, banners, and marketing materials using design software." },
    { job_title: "Web Developer", job_price: "$60/hr", job_description: "Builds and maintains websites using HTML, CSS, JavaScript, and backend frameworks." },
    { job_title: "Content Writer", job_price: "$30/hr", job_description: "Writes articles, blog posts, and marketing copy tailored to specific audiences." },
    { job_title: "Virtual Assistant", job_price: "$25/hr", job_description: "Provides remote administrative support including scheduling, email management, and data entry." },
    { job_title: "Social Media Manager", job_price: "$40/hr", job_description: "Manages social media accounts, creates posts, and analyzes performance metrics." },
    { job_title: "Mobile App Developer", job_price: "$70/hr", job_description: "Designs and develops mobile applications for iOS and Android platforms." },
    { job_title: "SEO Specialist", job_price: "$50/hr", job_description: "Improves website ranking through keyword research, content optimization, and technical SEO." },
    { job_title: "Video Editor", job_price: "$55/hr", job_description: "Edits and produces video content for advertising, social media, and professional projects." },
    { job_title: "Data Analyst", job_price: "$65/hr", job_description: "Analyzes datasets to provide insights, create reports, and support business decision-making." },
    { job_title: "Customer Support Specialist", job_price: "$20/hr", job_description: "Assists customers via chat, email, or phone by resolving issues and answering inquiries." }
  ];

  return (
    <div>
      {data_arr.map((job) => (
       <JobCard 
  job_title={job.job_title} 
  job_price={job.job_price} 
  job_description={job.job_description} 
/>

      ))}
    </div>
  );
}

export default App;
