import JobCard from './JobCard';

function JobList({ jobs, onDelete }) {
  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        <p>No jobs match your filters.</p>
        <p className="empty-state__hint">
          Try clearing the search box or unchecking "Show urgent only".
        </p>
      </div>
    );
  }

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard
          key={job.job_id}
          job={job}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default JobList;
