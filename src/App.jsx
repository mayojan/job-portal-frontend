import { useState } from 'react';
import PageHeader from './components/PageHeader';
import JobList from './components/JobList';
import AddJobForm from './components/AddJobForm';
import { jobs as initialJobs } from './data/jobs';
import './App.css';

function App() {
  const [jobs, setJobs] = useState(initialJobs);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('title');
  const [urgentOnly, setUrgentOnly] = useState(false);

  function handleAdd(newJob) {
    const job_id = Math.max(0, ...jobs.map(j => j.job_id)) + 1;
    setJobs([{ job_id, ...newJob }, ...jobs]);
  }

  function handleDelete(jobId) {
    if (!window.confirm('Delete this job?')) return;
    setJobs(jobs.filter(job => job.job_id !== jobId));
  }

  function clearFilters() {
    setQuery('');
    setSort('title');
    setUrgentOnly(false);
  }

  const visible = jobs
    .filter(job =>
      job.job_title.toLowerCase().includes(query.toLowerCase()) ||
      job.company_name.toLowerCase().includes(query.toLowerCase())
    )
    .filter(job => !urgentOnly || job.is_urgent)
    .sort((a, b) => {
      if (sort === 'title') return a.job_title.localeCompare(b.job_title);
      if (sort === 'company') return a.company_name.localeCompare(b.company_name);
      if (sort === 'location') return a.location.localeCompare(b.location);
      return 0;
    });

  return (
    <div className="app">
      <PageHeader
        title="Job Portal — Available Jobs"
        subtitle={`${visible.length} of ${jobs.length} positions shown`}
      />

      <AddJobForm onAdd={handleAdd} />

      <div className="controls">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search by job title or company..."
        />

        <select
          className="sort-select"
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          <option value="title">Sort: Job Title</option>
          <option value="company">Sort: Company</option>
          <option value="location">Sort: Location</option>
        </select>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={urgentOnly}
            onChange={e => setUrgentOnly(e.target.checked)}
          />
          Show urgent only
        </label>

        {(query || urgentOnly || sort !== 'title') && (
          <button onClick={clearFilters} className="button button--link">
            Clear filters
          </button>
        )}
      </div>

      <JobList jobs={visible} onDelete={handleDelete} />
    </div>
  );
}

export default App;
