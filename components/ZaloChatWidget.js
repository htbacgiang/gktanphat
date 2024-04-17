// components/ZaloChatWidget.js

import { useEffect } from "react";

const ZaloChatWidget = () => {
  useEffect(() => {
    // Initialize Zalo chat widget
    window.onload = function () {
      window.ZaloWebSDK.showPopup();
    };
  }, []);

  return null; // Zalo chat widget will be initialized inside useEffect, so we don't need to render anything
};

export default ZaloChatWidget;
