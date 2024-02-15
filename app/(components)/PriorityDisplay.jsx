import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PriorityDisplay = ({priority}) => {
  return (
 <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${
          priority > 0 ? " text-beige" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${
          priority > 1 ? " text-beige" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`  pr-1 ${
          priority > 2 ? " text-beige" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${
          priority > 3 ? " text-beige" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={` ${priority > 4 ? " text-beige" : " text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
