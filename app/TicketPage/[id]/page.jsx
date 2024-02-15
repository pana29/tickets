import TicketForm from '@/app/(components)/TicketForm';

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3002/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = async ({ params }) => {
  const editMode = params.id === 'new' ? false : true;
  let updateTicketData = {};

  if (editMode) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id : "new"
    }
  }
  return <TicketForm ticket={updateTicketData}/>;
};

export default TicketPage;
