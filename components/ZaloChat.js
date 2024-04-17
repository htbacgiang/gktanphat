// components/ZaloChat.js

import React, { useEffect } from "react";

const ZaloChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sp.zalo.me/plugins/sdk.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="zalo-chat-widget-container zalo-chat-widget"
      data-oaid="611376184568066608"
      data-welcome-message="Giá kệ Tân Phát xin chào, chúng tôi có thể giúp gì cho bạn?"
      data-autopopup="0"
      data-width=""
      data-height=""
    ></div>
  );
};

export default ZaloChat;
