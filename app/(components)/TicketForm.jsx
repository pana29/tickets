'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = ({ ticket }) => {
  const editMode = ticket._id === 'new' ? false : true;
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editMode) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: 'PUT',
        body: JSON.stringify({ formData }),
        'content-type': 'application/json',
      });
      if (!res.ok) {
        throw new Error('Faild to Update Ticket');
      }
    } else {
      const res = await fetch('/api/Tickets', {
        method: 'POST',
        body: JSON.stringify({ formData }),
        'content-type': 'application/json',
      });
      if (!res.ok) {
        throw new Error('Faild to create Ticket');
      }
    }
    router.refresh();
    router.push('/');
  };

  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'not started',
    category: 'Hardware Problem',
  };

  if (editMode) {
    startingTicketData['title'] = ticket.title;
    startingTicketData['description'] = ticket.description;
    startingTicketData['priority'] = ticket.priority;
    startingTicketData['progress'] = ticket.progress;
    startingTicketData['status'] = ticket.status;
    startingTicketData['category'] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center ">
      <form
        className="flex flex-col gap-3 xl:w-1/2 xl:m-0 w-[400px] m-3 bg-gray-200"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="text-textDark">
          {editMode ? 'Update your Ticket' : 'Create Your Ticket'}
        </h3>
        <label className="text-textDark">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label className="text-textDark">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label className="text-textDark">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <lable className="text-textDark">Priority</lable>
        <div>
          <input
            className=""
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label className="text-textDark">1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label className="text-textDark">2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label className="text-textDark">3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label className="text-textDark">4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label className="text-textDark">5</label>
        </div>
        <label className="text-textDark">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <lable className="text-textDark">Status</lable>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={editMode ? 'Update Ticket' : 'Create Ticket'}
        />
      </form>
    </div>
  );
};

export default TicketForm;
