import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import UseHook from './hook/useHook';

import './App.css'

function App() {
  const { user, repos, showProjects, loading, notFound, handleUser, fetchRepos } = UseHook()

  return (
    <main>
      <h2>Consumindo Api com Axios</h2>
      <input type="text" value={user} onChange={handleUser} placeholder='Digite o nome do Usuário...' />
      <button onClick={fetchRepos}><HiMiniMagnifyingGlass size={15} /> Buscar projetos</button>
      <h4>Todos os projetos no github:</h4>

      {loading ? (
        <p>Loading...</p>
      ) : notFound ? (
        <p>Usuário não encontrado!</p>
      )
        : showProjects > 0 ? (
          <div className='projetos'>
            {repos.map(repo => (
              <div className='apiDiv' key={repo.id}>
                <h5> {repo.name}</h5>
                <p>Criado em: {repo.created_at}</p>
                <a href={repo.html_url} target='_blank' rel="noreferrer">Ver Repositório</a>
              </div>
            ))}
          </div>
        ) : null}

    </main>
  )
}

export default App
