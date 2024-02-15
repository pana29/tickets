// import TicketCard from './(components)/TicketCard';

// const getTickets = async () => {
//   try {
//     const res = await fetch('http://localhost:3002/api/Tickets', {
//       cache: 'no-store',
//     });
//     return res.json();
//   } catch (error) {
//     console.log('Error loading topics: ', error);
//   }
// };

// const Dashboard = async () => {
//   const { tickets } = await getTickets();

//   const uniqueCategories = [
//     ...new Set(tickets?.map(({ category }) => category)),
//   ];

//   return (
//     <div className="p-5 max-w-4xl m-auto">
//       <div>
//         {tickets &&
//           uniqueCategories?.map((uniqueCategory, categoryIndex) => (
//             <div key={categoryIndex} className="mb-4">
//               <h2 className='text-[#404258]'>{uniqueCategory}</h2>
//               <div className="lg:grid grid-cols-2 xl:grid-cols-3 ">
//                 {tickets
//                   .filter((ticket) => ticket.category === uniqueCategory)
//                   .map((filteredTicket, _index) => (
//                     <TicketCard
//                       id={_index}
//                       key={_index}
//                       ticket={filteredTicket}
//                     />
//                   ))}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

"use client";

import React, { useState, useEffect } from 'react';
import TicketCard from './(components)/TicketCard';

const getTickets = async () => {
 const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3002' 
    : 'https://tickets-app-pi.vercel.app';

  try {
    const res = await fetch(`${baseUrl}/api/Tickets`, {
      cache: 'no-store',
    });
    return await res.json();
  } catch (error) {
    console.log('Error loading tickets: ', error);
    return [];
  }
};

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const data = await getTickets();
      setTickets(data.tickets || []); 
    };

    fetchTickets();
  }, []);


  const uniqueCategories = [
    ...new Set(tickets.map(({ category }) => category)),
  ];

  return (
    <div className="p-5 max-w-4xl m-auto">
      {tickets && uniqueCategories.map((uniqueCategory, categoryIndex) => (
        <div key={categoryIndex} className="mb-4">
          <h2 className='text-[#404258]'>{uniqueCategory}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-3">
            {tickets
              .filter((ticket) => ticket.category === uniqueCategory)
              .map((filteredTicket, index) => (
                <TicketCard
                  key={index} 
                  ticket={filteredTicket}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
