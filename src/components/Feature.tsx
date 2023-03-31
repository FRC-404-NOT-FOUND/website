import React, { ReactNode } from "react";
import { IconType } from "react-icons";

const Feature = ({ icon: Icon, title = 'Title', children }: { icon?: IconType, title?: string, children?: ReactNode }) => (
  <div className="feature flex flex-col gap-4">
    {Icon && <Icon className="react-icon" size={64} />}
    <div>
      <h3>{title}</h3>
      <p>
        {children}
      </p>
    </div>
  </div>
)

export default Feature
