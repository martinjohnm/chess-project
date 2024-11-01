


const BACKEND_URL =
import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

export const Login = () => {
  
  const google = () => {
    window.open(`${BACKEND_URL}/auth/google`, '_self');
  };

    return <div className="flex flex-col items-center justify-center h-screen text-textMain">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-500 drop-shadow-lg">
        Play Chess for Everyone
      </h1>
      <div className="bg-bgAuxiliary2 rounded-lg shadow-2xl p-8 flex flex-col md:flex-row">
        <div className="mb-8 md:mb-0 md:mr-8 justify-center flex flex-col">
          <div
            className="flex items-center text-white font-mono justify-center px-4 py-2 rounded-md mb-4 cursor-pointer transition-colors bg-slate-800 hover:bg-gray-600 duration-300"
            onClick={google}
          >
            <img src="google.svg" alt="" className="w-6 h-6 mr-2" />
            Sign in with Google
          </div>
        </div>
        
      </div>
      </div>
 
}