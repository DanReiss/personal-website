import React from 'react';

function Title2({ children: content, withDecoration, className }) {
  if (withDecoration) {
    return (
      <div className={`flex mb-6 md:mb-8 ${className}`}>
        <h3 className="font-josefin text-3xl md:text-[2.25rem] font-bold tracking-wide">{content}</h3>
        <span className="bg-blue w-full h-1 inline-block flex-1 m-auto ml-2 md:ml-4" />
      </div>
    );
  }

  return (
    <h3 className={`font-josefin text-3xl md:text-[2.25rem] font-bold tracking-wide mb-6 md:mb-8 ${className}`}>{content}</h3>
  );
}

function Text({ children: content, className }) {
  return (
    <p className={`text-neutral-200 md:text-lg ${className}`}>
      {content}
    </p>
  );
}

function TextSM({ children: content, className }) {
  return (
    <p className={`font-light text-neutral-200 ${className}`}>
      {content}
    </p>
  );
}

export { Title2, Text, TextSM };
