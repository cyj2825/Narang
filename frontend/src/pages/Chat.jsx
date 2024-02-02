import { Stomp } from "@stomp/stompjs";
import { useState } from "react";
import SockJS from "sockjs-client";

const Chat = () => {
  const sockJS = new SockJS("https://i10a701.p.ssafy.io/api/message/chat");
  const stomp = Stomp.over(sockJS);
  // 이 구간은 현재 생략 가능할 듯?
  const [inputMsg, setInputMsg] = useState("");
  const [msgList, setMsgList] = useState([
    { nickname: "관리자", message: "--님이 입장하셨습니다." },
  ]);

  stomp.connect(
    "yoonjae",
    "dbswoWkd",
    function (frame) {
      console.log("Connected to Stomp");

      // Subscribe to the chat room
      stomp.subscribe("/exchange/chat.exchange/room.room1", function (message) {
        // const chatDto = JSON.parse(message.body);
        /* 이부분은 알아서 받아야 하는 데이터 값으로 변경해야 함
        setMsgList((prev) => [
          ...prev,
          { [chatDto.nickname]: chatDto.message },
        ]);
*/
      });
    },
    function (error) {
      console.error("Stomp connection error", error);
    }
  );

  const submitHandler = (event) => {
    event.preventDefault();

    stomp.send(
      "/pub/chat.message.room1",
      {},
      JSON.stringify({
        // 이부분도 알아서 데이터 변경해야 함
        message: inputMsg,
        memberId: 1,
        nickname: "YourNickname",
      })
    );
    setInputMsg("");
  };

  const inputMsgHandler = (event) => {
    setInputMsg(event.target.value);
  };

  return (
    <div>
      <div id="chatArea">
        {msgList.map((msg) => (
          <li key={msg.message}>{`${msg.nickname} : ${msg.message}`}</li>
        ))}
      </div>

      <form id="chatForm" onSubmit={submitHandler}>
        <label>Message:</label>
        <input
          onChange={inputMsgHandler}
          type="text"
          id="message"
          value={inputMsg}
          required
          placeholder="message써줘잉"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
