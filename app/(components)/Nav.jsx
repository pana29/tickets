import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex justify-between max-w-3xl m-auto space-x-20">
        <Link href="/" className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faHome} className="icon" />
          <p className='text-textDark font-bold'>Home</p>
        </Link>
        <Link href="/TicketPage/new" className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faTicket} className="icon" />
          <p className='text-textDark font-bold'>New Ticket</p>
        </Link>
      </div>

    </nav>
  );
};

export default Nav;
