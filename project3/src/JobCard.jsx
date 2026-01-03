import './App.css';

// Single job card component
function JobCard( job ) {
  return (
    <div className="card" >
      <h2>{job.job_title}</h2>
      <h4>{job.job_price}</h4>
      <p>{job.job_description}</p>
    </div>
  );
}

export default JobCard;
