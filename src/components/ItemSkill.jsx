import React from 'react';
import Image from 'next/image';

function ItemSkill({ imagePath, name }) {
  return (
    <div>
      <Image
        src={imagePath}
        alt={`${name} icon`}
        width={30}
        height={30}
      />
    </div>
  );
}

export default ItemSkill;
