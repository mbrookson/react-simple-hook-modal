import * as React from 'react';
import { ModalTransition } from '../../dist';

interface Props {
  onChange(transition: ModalTransition);
}
export const TransitionSelect: React.FC<Props> = ({ onChange }) => (
  <div className="w-full md:w-1/4 mb-6 md:mb-0 mt-8">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      Transition
    </label>
    <div className="relative">
      <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={e => onChange(e.target.value as ModalTransition)}
      >
        {Object.keys(ModalTransition).map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
);
