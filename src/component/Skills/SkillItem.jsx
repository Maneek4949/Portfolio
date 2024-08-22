import React from 'react'

function SkillItem({ src, alt, rotate, isInner }) {
    const rotateIcons = (() => {
        if (rotate === "") return "";
        if (rotate.startsWith("rotate-")) return `-${rotate}`; // Converts "rotate-45" to "-rotate-45"
        if (rotate.startsWith("-rotate-")) return rotate.slice(1); // Converts "-rotate-45" to "rotate-45"
        return rotate; // In case rotate is already valid
    })();
    return (
      <div className={`${isInner?"animate-item-inner":"animate-item-outer"} h-[44px] w-[44px] rounded-full bg-gray-50 p-2 ring-1 ring-gray-100`}>
        <img src={src} alt={alt} className={`h-full w-full rounded-md p-0.5 ${rotateIcons}`} />
      </div>
    );
  }

export default SkillItem