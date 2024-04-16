const ZaloChat = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: (
        <div
          class="zalo-chat-widget"
          data-oaid="611376184568066608"
          data-welcome-message="Giá kệ siêu thị Tân Phát rất vui được hỗ trợ anh chị"
          data-autopopup="0"
          data-width="300"
          data-height="300"
        ></div>
      ),
    }}
  />
);

export default ZaloChat;
