import React from "react";

import { getConfig } from "@edx/frontend-platform";
import { useIntl } from "@edx/frontend-platform/i18n";
import { Hyperlink, Image } from "@openedx/paragon";
import classNames from "classnames";

import bg from "../../../assets/bg.jpg";
import logo from "../../../assets/logo.svg";

import messages from "./messages";

const LargeLayout = ({ children }) => {
  const { formatMessage } = useIntl();

  return (
    // style={{display: "flex",alignItems: "center" ,height: "100vh" ,justifyContent: "center"}}

    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#F6F6F4" }}
    >
      <div className=" mb-5 bg-white d-flex flex-column align-items-center " style = {{borderRadius: '1rem', boxShadow:'rgba(0 0 0 / 41%) -10px 0.5rem 2rem 0px'}}>
        <div
          className="d-flex  flex-row"
          style={{
           
          }}
        >
          <div style={{ borderRadius: '1rem 0rem 0rem 1rem', backgroundImage: `url(${bg})`,minWidth:"50vh",
              backgroundPosition: "left",
             
              backgroundRepeat: "no-repeat",}}>
            {/* <img src={bg} class="card-img w-25" alt="..." /> */}
            {/* <div class="card-img-overlay"> */}
            <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
              <Image
                className="w-75"
                alt={getConfig().SITE_NAME}
                src={logo}
              />
            </Hyperlink>

            <h1 className=" text-white mt-3 ml-5 mr-6 mb-5" style={{fontSize:" 2.5rem"}}>
              <div className="text-white">Level Up on</div>
              <div className="text-white">Cybersecurity</div>
            </h1>
            {/* </div> */}
          </div>
          <div className="pl-5 pr-5 pt-6 pb-5" style={{
            
            width: "50%"
          }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LargeLayout;
