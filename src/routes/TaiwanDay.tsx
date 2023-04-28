import { useParams } from "react-router-dom";

function TaiwanDay(props : any) {

  const { dayId } = useParams();



  return (
    <div className='flex h-screen w-screen
    justify-center text-center'>
      <div>
        <p>Day {dayId}!</p>
      </div>
    </div>
  )
} 

export default TaiwanDay;