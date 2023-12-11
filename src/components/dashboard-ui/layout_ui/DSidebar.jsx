import React, { useContext } from "react";
import Sidebar_ui from "./Sidebar_ui";
import { AuthContext } from "../../../context/AuthContext";
import { Offcanvas, OffcanvasBody } from "reactstrap";

const DSidebar = () => {
  const { open, setOpen } = useContext(AuthContext);
  return (
    <>
      <div className="sidebar">
        <Sidebar_ui />
      </div>

      <Offcanvas
        isOpen={open ? true : false}
        scrollable
        toggle={() => setOpen(false)}
      >
        <OffcanvasBody>
          <Sidebar_ui />
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default DSidebar;
