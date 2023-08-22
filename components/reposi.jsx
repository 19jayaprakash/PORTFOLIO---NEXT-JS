import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function getRepos() {
  const response = await fetch('https://api.github.com/users/19jayaprakash/repos');
  const repos = await response.json();
  return repos;
}

const CodePage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const fetchedRepos = await getRepos();
      setRepos(fetchedRepos);
    }
    fetchRepos();
  }, []);

  return (
    <div className="repos-container">
  <h2 className="text-2xl font-semibold mb-4">Repositories</h2>
  <ul className="repo-list">
    {repos.map((repo) => (
      <li key={repo.id} className="mb-8">
          <a className="block border border-blue-600 text-white px-4 py-3 rounded shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-black font-semibold">{repo.name}</h3>
            <p className="text-sky-600 text-base">{repo.description}</p>
            <div className="repo-details mt-2 text-gray-500">
              <span className="flex items-center">
                <FaStar className="mr-1" /> {repo.stargazers_count}
              </span>
              <span className="flex items-center">
                <FaCodeBranch className="mr-1" /> {repo.forks_count}
              </span>
              <span className="flex items-center">
                <FaEye className="mr-1" /> {repo.watchers_count}
              </span>
            </div>
          </a>
      </li>
    ))}
  </ul>
</div>

  );
};

export default CodePage;
