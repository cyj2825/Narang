import { useEffect, useState, Fragment } from "react";
import axios from "axios";


const dummyData = {
  tripId: "tripId13213",
  tripName: "강원도로 같이 가실분",
  senderId: "조예진",
  receiverId: "조용환",
  position: ["대우"],
  aspiration: "이번 여행 뿌셔버리겠습니다",
  alertType: "REQUEST",
  isRead: false,
};

const YejinPage = () => {
  const [alertMessage, setAlertMessage] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://i10a701.p.ssafy.io/api/message/alert/list/${dummyData.senderId}`
      )
      .then((response) => {
        setAlertMessage(response.data.alertList);
        console.log(response.data.alertList)
      })
      .catch((error) => {
        console.log("Error fetching alert data;", error);
      });
    const eventSource = new EventSource(
      `https://i10a701.p.ssafy.io/api/message/alert/subscribe/${dummyData.senderId}`
    );
    eventSource.onopen = () => {
      console.log('SSE 연결이 성공적으로 열렸습니다');
    };

    // SSE 메시지를 수신할 때 호출되는 이벤트 핸들러를 정의합니다.
    eventSource.onmessage = async (event) => {
      const data = await event.data;
      // 받은 메시지를 상태에 추가합니다.
      console.log(data);
      console.log(alertMessage);
      setAlertMessage((prevMessages) => [...prevMessages, data]);
    };
    eventSource.onclose = () => {
      console.log("SSE connection closed");
      // 여기에 연결이 닫힐 때 수행하고자 하는 작업 추가
    };
    

    // 컴포넌트가 언마운트되면 SSE 연결을 닫습니다.
    return () => {
      eventSource.close();
    };
  }, []);

  const alertHandler = () => {
    axios
      .post("https://i10a701.p.ssafy.io/api/message/alert/attend", dummyData)
      .then((response) => {
        // 요청이 성공한 경우 처리
        console.log("요청 성공")
        console.log("Response data:", response.data);
        // 원하는 추가적인 작업 수행
      })``
      .catch((error) => {
        // 요청이 실패한 경우 처리
        console.log("요청 실패")
        console.error("Error:", error);
        // 원하는 에러 처리 수행
      });
  };

  // const alertAllowHandler = () => {
  //   axios
  //     .post("https://i10a701.p.ssafy.io/api/message/alert/attend", {
  //       ...dummyData2,
  //       alterType: "ACCEPT",
  //     })
  //     .then((response) => {
  //       // 요청이 성공한 경우 처리
  //       console.log("Response data:", response.data);
  //       // 원하는 추가적인 작업 수행
  //     })
  //     .catch((error) => {
  //       // 요청이 실패한 경우 처리
  //       console.error("Error:", error);
  //       // 원하는 에러 처리 수행
  //     });
  // };
  // const alertRejectHandler = () => {
  //   axios
  //     .post("https://i10a701.p.ssafy.io/api/message/alert/attend", {
  //       ...dummyData2,
  //       alterType: "ACCEPT",
  //     })
  //     .then((response) => {
  //       // 요청이 성공한 경우 처리
  //       console.log("Response data:", response.data);
  //       // 원하는 추가적인 작업 수행
  //     })
  //     .catch((error) => {
  //       // 요청이 실패한 경우 처리
  //       console.error("Error:", error);
  //       // 원하는 에러 처리 수행
  //     });
  // };

  return (
    <Fragment>
      예진이 페이지
      <div className="flex space-x-4 mt-8">
        <div> 용환 알림보내기</div>
        <button
          onClick={() => alertHandler()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          보내기
        </button>
      </div>
      <div>
        <button
          onClick={() => alertAllowHandler()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          수락 버튼 누르기
        </button>

        <button
          onClick={() => alertRejectHandler()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          거절 버튼 누르기
        </button>
      </div>
      <ul>
        {alertMessage.map((msg, index) => (
          <li key={index}>{msg.tripName}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default YejinPage;
