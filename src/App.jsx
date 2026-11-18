import PageHeader from './components/PageHeader';
import JobList from './components/JobList';
import { jobs } from './data/jobs';
import './App.css';

function App() {
  return (
    <div className="app">
      <PageHeader
        title="Job Portal — Available Jobs"
        subtitle={`${jobs.length} open positions in the system`}
      />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
