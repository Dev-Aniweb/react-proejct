import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Our Services</h1>

      <ul className="flex gap-4 text-lg mb-6">
        <li><Link to="education" className="text-blue-600">Education Service</Link></li>
        <li><Link to="learner" className="text-blue-600">Learner Service</Link></li>
      </ul>

      <Outlet /> {/* Subpages appear here */}
    </div>
  );
};

export default Services;
