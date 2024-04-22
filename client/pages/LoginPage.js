import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";

// export default function LoginPage() {
//   const [username,setUsername] = useState('');
//   const [password,setPassword] = useState('');
//   const [redirect,setRedirect] = useState(false);
//   const {setUserInfo} = useContext(UserContext);
//   async function login(ev) {
//     ev.preventDefault();
//     const response = await fetch('http://localhost:4000/login', {
//       method: 'POST',
//       body: JSON.stringify({username, password}),
//       headers: {'Content-Type':'application/json'},
//       credentials: 'include',
//     });
//     if (response.ok) {
//       response.json().then(userInfo => {
//         setUserInfo(userInfo);
//         setRedirect(true);
//       });
//     } else {
//       alert('wrong credentials');
//     }
//   }

//   if (redirect) {
//     return <Navigate to={'/'} />
//   }
//   return (
//     <form className="login" onSubmit={login}>
//       <h1>Login</h1>
//       <input type="text"
//              placeholder="username"
//              value={username}
//              onChange={ev => setUsername(ev.target.value)}/>
//       <input type="password"
//              placeholder="password"
//              value={password}
//              onChange={ev => setPassword(ev.target.value)}/>
//       <button>Login</button>
//     </form>
//   );
// }



// ... import statements ...

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const userInfo = await response.json();
      setUserInfo(userInfo);
      setRedirect(true);
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Failed to fetch. Please check the console for details.');
    }
  }
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button disabled={loading}>Login</button>
    </form>
  );

  
}
