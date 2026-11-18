import { useState } from 'react';

function AddJobForm({ onAdd }) {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Minimal validation (Week 11 covers form libraries)
    if (!jobTitle.trim() || !companyName.trim()) {
      alert('Job title and company name are required.');
      return;
    }

    onAdd({
      employer_id: 999,
      job_title: jobTitle.trim(),
      company_name: companyName.trim(),
      location: location.trim() || 'Kabul',
      salary: salary.trim() || 'Negotiable',
      deadline: deadline || '2026-12-30',
      description: description.trim() || 'No description provided.',
      is_urgent: isUrgent,
    });

    // Reset form fields
    setJobTitle('');
    setCompanyName('');
    setLocation('');
    setSalary('');
    setDeadline('');
    setDescription('');
    setIsUrgent(false);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Post a New Job</h3>

      <input
        type="text"
        placeholder="Job Title *"
        value={jobTitle}
        onChange={e => setJobTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Company Name *"
        value={companyName}
        onChange={e => setCompanyName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Location (e.g. Kabul)"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />

      <input
        type="text"
        placeholder="Salary (e.g. 30,000 AFN)"
        value={salary}
        onChange={e => setSalary(e.target.value)}
      />

      <input
        type="date"
        value={deadline}
        onChange={e => setDeadline(e.target.value)}
      />

      <input
        type="text"
        placeholder="Short Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={isUrgent}
          onChange={e => setIsUrgent(e.target.checked)}
        />
        Urgent position
      </label>

      <button type="submit" className="button button--primary">
        Add Job
      </button>
    </form>
  );
}

export default AddJobForm;
