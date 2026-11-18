function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-card__header">
        <h3>{job.job_title}</h3>
        {job.is_urgent && (
          <span className="badge badge--urgent">Urgent</span>
        )}
      </div>
      <p className="job-card__company"><strong>Company:</strong> {job.company_name}</p>
      <p>{job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Deadline:</strong> {job.deadline}</p>
    </div>
  );
}

export default JobCard;
