import {
  createContext,
  useContext,
  useState
} from 'react';


const AuthContext = createContext(null);


// ======================================================
// USUARIO DE DEMOSTRACIÓN
// ======================================================

const DEMO_USER = {
  id: 1,
  name: 'Mario',
  email: 'mario@marioplus.com',
  role: 'player'
};


const DEMO_PASSWORD = 'mario123';


// ======================================================
// PROVIDER
// ======================================================

export function AuthProvider({ children }) {

  // Recuperar sesión si el navegador fue recargado
  const [user, setUser] = useState(() => {

    const storedUser =
      localStorage.getItem('marioPlusUser');


    if (!storedUser) {
      return null;
    }


    try {

      return JSON.parse(storedUser);

    } catch {

      localStorage.removeItem('marioPlusUser');

      return null;

    }

  });


  // ======================================================
  // LOGIN
  // ======================================================

  function login(email, password) {

    const emailNormalizado =
      email
        .trim()
        .toLowerCase();


    if (
      emailNormalizado === DEMO_USER.email &&
      password === DEMO_PASSWORD
    ) {

      setUser(DEMO_USER);

      localStorage.setItem(
        'marioPlusUser',
        JSON.stringify(DEMO_USER)
      );


      return {
        ok: true
      };

    }


    return {
      ok: false,
      message:
        'Correo o contraseña incorrectos.'
    };

  }


  // ======================================================
  // LOGOUT
  // ======================================================

  function logout() {

    setUser(null);

    localStorage.removeItem(
      'marioPlusUser'
    );

  }


  // ======================================================
  // VALOR COMPARTIDO
  // ======================================================

  const value = {

    user,

    isAuthenticated:
      Boolean(user),

    login,

    logout

  };


  return (

    <AuthContext.Provider value={value}>

      {children}

    </AuthContext.Provider>

  );

}


// ======================================================
// CUSTOM HOOK PARA USAR EL CONTEXTO
// ======================================================

export function useAuth() {

  const context =
    useContext(AuthContext);


  if (!context) {

    throw new Error(
      'useAuth debe utilizarse dentro de AuthProvider'
    );

  }


  return context;

}