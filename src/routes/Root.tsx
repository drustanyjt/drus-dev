
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'

function Root() {

  return (
    <div>
      <div
        className="fixed flex h-screen w-screen left-0 top-0
        items-center justify-center"
      >
        <div className="text-center text-cyan-700">
          <h1 className="text-4xl font-bold mb-4"> Welcome to drus.dev </h1>
          <p className="text-lg">Built with ChatGPT</p>
          <Link to={`/taiwan`}>
            <button
              className=" bg-cyan-300 hover:bg-slate-600 hover:text-cyan-50
            rounded-xl px-1 py-1"
            >
              Click me!
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default Root;
