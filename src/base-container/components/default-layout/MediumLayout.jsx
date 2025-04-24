import React from "react";

import { getConfig } from "@edx/frontend-platform";
import { useIntl } from "@edx/frontend-platform/i18n";
import { Hyperlink, Image } from "@openedx/paragon";
import classNames from "classnames";

import bg from "../../../assets/bg.jpg";
import logo from "../../../assets/logo.svg";

import messages from "./messages";

const MediumLayout = ({ children }) => {
  const { formatMessage } = useIntl();

  return (
    // style={{display: "flex",alignItems: "center" ,height: "100vh" ,justifyContent: "center"}}

    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#F6F6F4" }}
    >
      <div className="bg-white d-flex flex-column align-items-center " style = {{borderRadius: '1rem', boxShadow:'rgba(0 0 0 / 41%) -10px 0.5rem 2rem 0px', width: "100%"}}>
        <div
          className="d-flex  flex-row "
          style={{
            height: "100vh",
            width: "100%"
          }}
        >
          <div style={{ borderRadius: '1rem 0rem 0rem 1rem', backgroundImage: `url(${bg})`,minWidth:"50%",
              backgroundPosition: "left",
              
              backgroundRepeat: "no-repeat",}}>

            <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
              <Image
                className="w-50"
                alt={getConfig().SITE_NAME}
                src={logo}
              />
            </Hyperlink>

            <h1 className="text-white mt-7 ml-5 mr-6 mb-5" style={{fontSize:" 2.5rem"}}>
              <div className="text-white">Level Up on</div>
              <div className="text-white">Cybersecurity</div>
            </h1>
            {/* </div> */}
          </div>
          <div className="pl-5 pr-5 pt-6" style={{
            
            width: "50%"
          }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MediumLayout;
