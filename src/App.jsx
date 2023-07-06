
import UseHook from './hook/useHook';

import './App.css'
import TextH2 from './components/typography/TextH2';
import TextH4 from './components/typography/Texth4';
import TextH5 from './components/typography/TextH5';
import TextP from './components/typography/TextP';
import Input from './components/input/input';
import Button from './components/button/Button';
import Container from './components/container/Container';

function App() {
  const { repos, showProjects, loading, notFound } = UseHook()

  return (
    <Container>
      <TextH2>Consumindo Api com Axios</TextH2>
      <Input />
      <Button />
      <TextH4>Todos os projetos no github:</TextH4>

      {loading ? (
        <TextP>Loading...</TextP>
      ) : notFound ? (
        <TextP>Usuário não encontrado!</TextP>
      )
        : showProjects > 0 ? (
          <div className='projetos'>
            {repos.map(repo => (
              <div className='apiDiv' key={repo.id}>
                <TextH5> {repo.name}</TextH5>
                <TextP>Criado em: {repo.created_at}</TextP>
                <a href={repo.html_url} target='_blank' rel="noreferrer">Ver Repositório</a>
              </div>
            ))}
          </div>
        ) : null}

    </Container>
  )
}

export default App
