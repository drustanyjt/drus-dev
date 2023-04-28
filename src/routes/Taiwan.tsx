import { Link, Outlet } from "react-router-dom";

function Taiwan() {

  const days = [0, 1, 2, 3, 4]

  return (
    <div>
      <div className='fixed flex flex-row h-12 w-screen left-0 top-0 bg-black
      items-center'>
        {days.map((day: number, index: number) => {
          return (
            <div key={index} className='flex-initial w-24 m-1 ml-1 justify-center text-center'>
              <Link to={`${day}`}>
                <button className='bg-green-300 hover:bg-green-900 hover:text-green-50
            w-full rounded-xl px-1 py-1'>Day {day}</button>
              </Link>
            </div>
          )
        })}

      </div>
      <div id="detail" className="mt-16">
        <Outlet />
      </div>

    </div>
  )
}

export default Taiwan;