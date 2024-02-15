"use client";
 import React, { useEffect, useState } from 'react';
import TicketForm from '@/app/(components)/TicketForm';

const fetchTicketData = async (ticketId) => {
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3002' 
    : 'https://tickets-app-pi.vercel.app'; 
  try {
    const res = await fetch(`${baseUrl}/api/Tickets/${ticketId}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch ticket");
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

const TicketPage = ({ ticketId }) => {
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    if (ticketId !== 'new') {
      fetchTicketData(ticketId).then(data => {
        if (data && data.foundTicket) {
          setTicketData(data.foundTicket);
        } else {
          setTicketData({_id: 'new'});
        }
      });
    } else {
      setTicketData({_id: 'new'});
    }
  }, [ticketId]);

  if (!ticketData) {
    return <div>Loading...</div>;
  }

  return <TicketForm ticket={ticketData} />;
};

export default TicketPage;
