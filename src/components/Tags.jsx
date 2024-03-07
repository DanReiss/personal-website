import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Tags({ selectedTags, setSelectedTags }) {
  const [selectValue, setSelectValue] = useState('');
  const tagsOptions = [
    { value: 'javascript', label: 'Javascript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'sass', label: 'SASS' },
    { value: 'tailwind', label: 'Tailwind' },
    { value: 'external api', label: 'External API' },
    { value: 'react', label: 'React' },
    { value: 'bootstrap', label: 'Bootstrap' },
  ];

  function addTag() {
    if (selectValue) { // adicionar verificação para evitar itens duplicados
      const tagSelected = tagsOptions.find((tagOption) => tagOption.value === selectValue);
      const isRepeated = selectedTags.some((tag) => tag.value === tagSelected.value);

      if (isRepeated) return;

      setSelectedTags([...selectedTags, tagSelected]);
    }
  }

  function removeTag(e, name) {
    const newArray = selectedTags.filter((tag) => tag.value !== name);
    setSelectedTags(newArray);
  }

  return (
    <div className="font-josefin">
      <div className=" flex row items-center gap-3 px-4 py-2 bg-gray w-fit">
        <select defaultValue="placeholder" onChange={(e) => setSelectValue(e.target.value)} className="text-white bg-gray outline-0">
          <option value="placeholder" disabled>Filtre os Projetos Aqui</option>
          {
            tagsOptions.map((tagOption) => (
              <option key={tagOption.value} value={tagOption.value}>{tagOption.label}</option>
            ))
          }
        </select>
        <button type="button" onClick={addTag} className="transition hover:scale-[1.075] active:scale-[0.925]">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3125 19.0344L16.0184 13.7394C16.95 12.3593 17.447 10.7319 17.4453 9.06687C17.4453 4.44687 13.6878 0.6875 9.06687 0.6875C4.44687 0.6875 0.6875 4.44687 0.6875 9.06687C0.6875 13.6878 4.44687 17.4462 9.06687 17.4462C10.732 17.4482 12.3595 16.9512 13.7394 16.0194L19.0325 21.3125L21.3125 19.0344ZM9.06687 14.8672C7.52874 14.8657 6.05404 14.254 4.96642 13.1664C3.87879 12.0788 3.26711 10.6041 3.26562 9.06594C3.26736 7.52788 3.87912 6.05332 4.96669 4.96575C6.05426 3.87818 7.52882 3.26642 9.06687 3.26469C10.6049 3.26642 12.0795 3.87818 13.1671 4.96575C14.2546 6.05332 14.8664 7.52788 14.8681 9.06594C14.8664 10.604 14.2546 12.0786 13.1671 13.1661C12.0795 14.2537 10.6049 14.8655 9.06687 14.8672ZM12.5872 8.10125H10.0316V5.54656H8.09844V8.10125H5.54375V10.0344H8.09844V12.5891H10.0316V10.0344H12.5872V8.10125Z" fill="white" />
          </svg>
        </button>
      </div>
      <div className="flex gap-5 flex-wrap mt-4 font-bold">
        {
          selectedTags.length > 0
            ? selectedTags.map((tag) => (
              <motion.span
                key={tag.value}
                animate={{ scale: [0, 1] }}
                className="flex flex-row w-fit gap-3 bg-light_gray text-blue px-2 py-1"
              >
                {tag.label}
                <button type="button" onClick={(e) => { removeTag(e, tag.value); }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1.875C12.1549 1.875 14.2215 2.73102 15.7452 4.25476C17.269 5.77849 18.125 7.84512 18.125 10C18.125 12.1549 17.269 14.2215 15.7452 15.7452C14.2215 17.269 12.1549 18.125 10 18.125C7.84512 18.125 5.77849 17.269 4.25476 15.7452C2.73102 14.2215 1.875 12.1549 1.875 10C1.875 7.84512 2.73102 5.77849 4.25476 4.25476C5.77849 2.73102 7.84512 1.875 10 1.875ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM6.83594 6.83594C6.46875 7.20312 6.46875 7.79687 6.83594 8.16016L8.67188 9.99609L6.83594 11.832C6.46875 12.1992 6.46875 12.793 6.83594 13.1562C7.20312 13.5195 7.79687 13.5234 8.16016 13.1562L9.99609 11.3203L11.832 13.1562C12.1992 13.5234 12.793 13.5234 13.1562 13.1562C13.5195 12.7891 13.5234 12.1953 13.1562 11.832L11.3203 9.99609L13.1562 8.16016C13.5234 7.79297 13.5234 7.19922 13.1562 6.83594C12.7891 6.47266 12.1953 6.46875 11.832 6.83594L9.99609 8.67188L8.16016 6.83594C7.79297 6.46875 7.19922 6.46875 6.83594 6.83594Z" fill="#004DA7" />
                  </svg>
                </button>
              </motion.span>
            ))
            : ''
        }
      </div>
    </div>
  );
}

export default Tags;
