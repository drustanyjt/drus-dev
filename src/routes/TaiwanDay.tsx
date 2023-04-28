import { useParams } from "react-router-dom";

// TODO add interfaces for props

function DayDetail(props : any) {
  const details = [
    {
      dayId: 0,
      toDo: [
        {
          event: "Arrive",
          timeStart: "1500",
          timeEnd: null,
        },
        {
          event: "Reach Hotel",
          timeStart: "1900",
          timeEnd: null,
        }
      ],
    },
    {
      dayId: 1,
      toDo: [
        {
          event: "Breakfast",
          timeStart: "0900",
          timeEnd: "1000",
        }
      ],
    }
  ]

  const dayId = props.dayId;
  if (dayId < 0 || dayId >= details.length) {
    return <p><b>Oops</b> no itinerary found</p>;
  }

  const detail = details[props.dayId];
  return <Detail detail={detail} />;
}

function Detail(props : any) {
    const detail = props.detail;

    return (
      <div className='flex flex-col gap-0'>
        {detail.toDo.map((item: any, index: number) => {
          return (
            <div key={index} className="flex items-center gap-4">
              <div className="font-bold">{item.timeStart +
              (item.timeEnd ? `-${item.timeEnd}` : ``)}</div>
              <div className="flex-1">{item.event}</div>
            </div>);
        })}
      </div>
    )
}

function TaiwanDay() {

  const { dayId } = useParams();

  const testDetail = {
    dayId: 1,
    toDo: [
      {
        event: "Breakfast",
        timeStart: "0900",
        timeEnd: "1000",
      }
    ],
  };

  return (
    <div className='flex flex-col w-screen
    justify-center text-center items-center'>
      <div id="welcomeText" className="flex">
        <p>Day {dayId}!</p>
      </div>
      <DayDetail dayId={dayId}/>
    </div>
  )
} 

function TaiwanIndex() {

  return (
    <div className="flex flex-col h-fit justify-center text-center items-center">
      <h1 className="text-4xl font-bold text-green-800">Welcome to the Taiwan Itinerary!</h1>
      <p>Click on a day at the top to see more</p>
    </div>
  ) 
}

export { TaiwanIndex, TaiwanDay };