import React from "react";

import { getConfig } from "@edx/frontend-platform";
import { useIntl } from "@edx/frontend-platform/i18n";
import { Hyperlink, Image } from "@openedx/paragon";
import classNames from "classnames";

import bg from "../../../assets/bg.jpg";
import logo from "../../../assets/logo.svg";

import messages from "./messages";
const SmallLayout = ({ children }) => {
  const { formatMessage } = useIntl();

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#F6F6F4" }}
    >
      <div className="bg-white d-flex flex-column align-items-center " style = {{ width: "100%"}}>
        <div
          className="d-flex  flex-column "
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "#F6F6F4"
          }}
        >
          <div className=" align-items-center text-center" style={{ backgroundImage: `url(${bg})`,
              backgroundPosition: "left",
              backgroundSize: " 400%",
              backgroundRepeat: "no-repeat",}}>

            <Hyperlink className="justify-content-center" destination={getConfig().MARKETING_SITE_BASE_URL}>
              <Image
                className="w-50"
                alt={getConfig().SITE_NAME}
                src={logo}
              />
            </Hyperlink>
            </div>
            <div >
            <h1 className="mt-3 ml-1 mr-1 mb-3 text-center"  style={{fontSize:" 2.2rem",color:"#38AA95"}}>
              <div >Level Up on</div>
              <div>Cybersecurity</div>
            </h1>
            {/* </div> */}
          </div>
          <div className="mt-4 ml-4 mr-4 mb-4" ><div className='p-3' style={{ backgroundColor: "#FFFFFF" ,borderRadius: '1rem', boxShadow:'rgba(0, 0, 0, 0.41) -7px 0rem 1.5rem 0px'}}>{children}</div></div>
        </div>
      </div>
    </div>
  );
};

export default SmallLayout;
