import React from 'react';
import SkillRow from './SkillRow';


function SkillCircle({isInner,skillsList}) {
  return (
    <div className={`absolute ${isInner ? "top-24 h-[500px] w-[500px] animate-inner " : "h-[700px] w-[700px] animate-outer"}`}>
      <div className="relative h-full w-full rounded-full" style={{ transform: 'none' }}>
        <div className={`absolute h-full w-full rounded-full ring-1 ring-gray-100 ${isInner?" scale-[0.925] ":"scale-[0.935]"}`}></div>
        {skillsList.map((rowItem)=>(
          <SkillRow key={rowItem[0].alt} items={rowItem} direction={rowItem[0].direction} isInner={isInner}/>
        ))}
      </div>
    </div>
  );
}

export default SkillCircle;
