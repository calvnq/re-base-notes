import React from 'react'

export const Repos = ({username, repos}) => {
  return (
    <div>
      <h2>Repos</h2>
      <ul className="list-group">
        {repos.map((repo, i) => {
          return (
            <li className="list-group-item" key={i}>
              {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
              {repo.description && <p> {repo.description}</p>}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}