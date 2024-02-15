import TicketCard from './(components)/TicketCard';

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3002/api/Tickets', {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log('Error loading topics: ', error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5 max-w-4xl m-auto">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2 className='text-[#404258]'>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-3 ">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
