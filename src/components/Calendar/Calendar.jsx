import { eventsData } from "../../data/eventsData";

  const EventHeader = () => (
    <div className="text-center py-8">
      <h1 className="text-4xl font-semibold">Eventos</h1>
      <h2 className="text-xl mt-4">Calendário de Eventos</h2>
    </div>
  );


  const EventCalendar = () => {
    const dates = ["06", "07", "08", "09", "10", "11", "12"];
  
    return (
      <div className="flex justify-center items-center flex-wrap text-center">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`p-5 text-center rounded-lg m-2`}
            >
            <span className="block text-sm">{date}</span>
          </div>
        ))}
      </div>
    );
  };
  
  const EventList = () => (
    <div className="mt-8">
      <h3 className="text-center text-2xl mb-6">Detalhes dos Eventos do Mês</h3>
      {eventsData.map((event, index) => (
        <div key={index} className="flex justify-between items-center bg-gray-100 p-6 rounded-lg shadow mb-4">
          <div>
            <h4 className="text-lg font-semibold">{event.title}</h4>
            <p>{event.description}</p>
            <p className="text-sm mt-2">{event.location}</p>
            <p className="text-sm">{event.speakers}</p>
          </div>
          <div className="flex items-center gap-4">
            <a href={event.link} className="text-blue-500 underline">Ver ticket</a>
            <button className="text-red-500 underline">Cancelar</button>
          </div>
        </div>
      ))}
    </div>
  );

  const Calendar = () => {
    return (
      < >
        <EventHeader />
        <EventCalendar />
        <EventList />
      </>
    );
  };
export default Calendar;
