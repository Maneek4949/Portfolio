import React from 'react';
import SkillItem from './SkillItem';

function SkillRow({ items, direction, isInner }) {
    let containerClasses = '';

    if (direction === 'horizontal') {
        containerClasses = 'absolute top-1/2 flex h-11 -translate-y-1/2 justify-between ';
        containerClasses += isInner ? 'w-[500px]' : 'w-[700px]';
    } else {
        containerClasses = 'absolute left-1/2 flex w-11 -translate-x-1/2 flex-col justify-between ';
        containerClasses += items[0].rotate + ' ';
        containerClasses += isInner ? 'h-[500px]' : 'h-[700px]';
    }

    return (
        <div className={containerClasses}>
            {items.map((item, index) => (
                <SkillItem key={index} src={item.src} alt={item.alt} rotate={item.rotate} isInner={isInner} />
            ))}
        </div>
    );
}

export default SkillRow;
