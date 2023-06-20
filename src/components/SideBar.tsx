import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Languages from "./Languages";
import ContactAndLinks from "./ContactAndLinks";

interface props {
  selectedPage: string;
}

function SideBar(prop: props) {
  return (
    <div>
      <Header />
      <AboutMe selectedPage={prop.selectedPage} />
      {/* <Languages  selectedPage={selectedPage}/>/> */}
      <ContactAndLinks />
    </div>
  );
}

export default SideBar;