import React from "react";

const Feature = ({ icon: Icon, title = 'Title', children }) => (
  <div className="feature flex flex-col gap-4">
    <Icon className="react-icon" size={64} />
    <div>
      <h3>{title}</h3>
      <p>
        {children}
      </p>
    </div>
  </div>
)

export default Feature
