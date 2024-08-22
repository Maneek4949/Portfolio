import React from 'react'
import SkillItem from './SkillItem';

function SkillRow({ items, direction, isInner}) {
    const containerClasses =
      direction === 'horizontal'
        ? `absolute top-[50%] flex h-[44px] w-[${isInner?"500px":"700px"}] -translate-y-[50%] justify-between`
        : `absolute left-[50%] flex h-[${isInner?"500px":"700px"}] w-[44px] -translate-x-[50%] flex-col justify-between ${items[0].rotate}`;
  
    return (
      <div className={containerClasses}>
        {items.map((item, index) => (
          <SkillItem key={index} src={item.src} alt={item.alt} rotate={item.rotate} isInner={isInner} />
        ))}
      </div>
    );
  }

export default SkillRow