import { Link, Outlet } from "react-router-dom";

function Taiwan() {

  return (
    <div>
      <div className='fixed flex flex-row h-12 w-screen left-0 top-0 bg-black
      items-center'>
        <div className='flex-initial w-24 m-1 ml-2 justify-center text-center'>
          <Link to={`1`}>
            <button className='bg-green-300 w-full rounded-xl px-1 py-1'>Day 1</button>
          </Link>
        </div>
        <div className='flex-initial w-24 m-1 justify-center text-center'>
          <Link to={`2`}>
            <button className='bg-green-300 w-full rounded-xl px-1 py-1'>Day 2</button>
          </Link>
        </div>
        <div className='flex-initial w-24 m-1 justify-center text-center'>
          <Link to={`3`}>
            <button className='bg-green-300 w-full rounded-xl px-1 py-1'>Day 3</button>
          </Link>
        </div>

      </div>
      <div id="detail" className='flex h-screen w-screen justify-center items-center text-center left-0 top-0'>
        <Outlet />
      </div>

    </div>
  )
}

export default Taiwan;