import React from 'react';
import Image from 'next/image';

function ItemSkill({ imagePath, name }) {
  return (
    <div className="w-full max-w-[165px] min-h-[40px] bg-gradient-to-r from-blue from-[15px] to-gray to-[15px] bg-gray relative px-3.5 py-2.5">
      {
        imagePath && (
          <Image
            src={imagePath}
            alt={`${name} icon`}
            width={36}
            height={36}
            className="absolute top-[-50%] left-[7.5px] drop-shadow-lg shadow-black md:scale-125"
          />
        )
      }
      <span className="inline-block w-full text-right font-bold md:text-xl">{name}</span>
    </div>
  );
}

export default ItemSkill;
