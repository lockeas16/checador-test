import React from "react";

const SectionFullVP = ({ children }) => (
  <section
    className="uk-section uk-section-large uk-width-expand"
    uk-height-viewport="offset-top: true; expand: true"
  >
    {children}
  </section>
);

export default SectionFullVP;
