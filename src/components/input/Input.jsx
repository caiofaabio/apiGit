
import UseHook from '../../hook/useHook'
import './Input.css'

const Input = () => {
  const { user, handleUser } = UseHook()

  return (
    <input type="text" value={user} onChange={handleUser} placeholder='Digite o nome do Usuário...' />
  )
}

export default Input