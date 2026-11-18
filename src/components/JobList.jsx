import JobCard from './JobCard';

function JobList({ jobs }) {
  if (jobs.length === 0) {
    return <p className="empty">No jobs available yet.</p>;
  }

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.job_id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
