
import UseHook from '../../hook/useHook'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'

import './Button.css'

const Button = () => {
  const { fetchRepos } = UseHook()
  return (
    <button onClick={fetchRepos}><HiMiniMagnifyingGlass size={15} /> Buscar projetos</button>
  )
}

export default Button