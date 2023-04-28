import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='fixed flex h-screen w-screen left-0 top-0 items-center justify-center'>
      <div className="text-center text-red-900">
        <h1 className=" text-4xl font-bold mb-4">Error 404</h1>
        <p className="text-lg">Something went wrong 😔</p>
      </div>

    </div>
  )
}

export default ErrorPage;