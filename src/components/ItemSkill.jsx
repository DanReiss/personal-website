import React from 'react';
import Image from 'next/image';

function ItemSkill({ imagePath, name }) {
  return (
    <div className="relative bg-gray px-3.5 py-2.5 mb-12">
      {imagePath
        ? (
          <Image
            src={imagePath}
            alt={`${name} icon`}
            width={36}
            height={36}
            className="absolute top-[-50%] drop-shadow-lg shadow-black"
          />
        )
        : ''}
      <span className="inline-block w-full text-right">{name}</span>
    </div>
  );
}

export default ItemSkill;
