import React, { ReactNode } from "react";
import { IconType } from "react-icons";

const Feature = ({ icon: Icon, title, children, className }: { icon?: IconType, title?: string, children?: ReactNode, className?: string }) => (
  <div className={`feature flex flex-col gap-4 ${className}`}>
    {Icon && <Icon className="react-icon" size={64} />}
    <div>
      {title && <h3>{title}</h3>}
      <p>
        {children}
      </p>
    </div>
  </div>
)

export default Feature
