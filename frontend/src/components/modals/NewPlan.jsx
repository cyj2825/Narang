import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { timeActions } from "../../store/timeSlice";

const NewPlan = (props) => {
  const modalBG = useRef("");
  const [day, setDay] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const dispatch = useDispatch();

  const submit = () => {
    console.log(day);
    const startHour = startTime.getHours();
    const startMinute = startTime.getMinutes();
    const endHour = endTime.getHours();
    const endMinute = endTime.getMinutes();
    dispatch(
      timeActions.setTime({ day, startHour, startMinute, endHour, endMinute })
    );
    props.onClose();
  };

  const change = (e) => {
    console.log(e.target.value);
    setDay(e.target.value);
  };

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-0 flex items-center justify-center bg-gray-500 bg-opacity-70"
      onClick={props.onClose}
      ref={modalBG}
    >
      <div
        className="z-10 px-10 py-4 bg-white rounded-3xl w-96 h-82"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="" onClick={props.onClose}>
          x
        </button>
        <>
          <div>
            날짜선택:
            <input type="number" value={day} onChange={change} />
          </div>
          <div>
            시작시간:
            <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>
          <div>
            종료시간:
            <DatePicker
              selected={endTime}
              onChange={(date) => setEndTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>
          <button onClick={submit}>확인</button>
        </>
      </div>
    </div>
  );
};

export default NewPlan;