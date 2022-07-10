import React, {useState} from 'react'
import './MyForm.css';
const MyForm = ({user}) => {

  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email: '');

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");


  const handleName = (e) => {
    setName(e.target.value);
    setEmail(e.target.email);
  }
  console.log(name);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário")
    console.log(name, email, bio, role);

    // clean form
    setName("");
    setEmail("");
    setBio("");
  }

  return (
    <div>
        {/* Creating form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Put your name: ' 
                onChange={handleName}
                value={name}/>
            </div>
            {/* label envolvendo input, mesmo resultado do exemplo acima porém com menos código  */}
            <label>
              <span>Bio: </span>
              <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
              <span>Email</span>
              <input type="email" name='email' placeholder='Digite seu email' 
              onChange={(e) => setEmail(e.target.value)}
              value={email}/>
            </label>
            <span>Função no sistema</span>
            <select name='role' onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin ">Administrador</option>
            </select>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm