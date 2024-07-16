import React, { useEffect, useState } from "react";
import { mockQuestions } from "../utils/constants";
import { ButtonComponent } from "../components/ButtonComponent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addedSurveyItem } from "../utils/answersSlice";
import { RootState } from "../utils/appStore";
import { useNavigate } from "react-router-dom";

export const Survey = () => {
  const [quesIndex, setQuesIndex] = useState(0);
  const [ansIndex, setAnsIndex] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(false);
  const colour = "bg-green-300";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );

  useEffect(() => {
    if (locateAnswersFromStore.length === 3) {
      navigate("/home");
    } else {
      navigate("/survey");
    }
  }, [locateAnswersFromStore.length, navigate]);
  const handleAnswersClick = (index: number, id: number, val: string) => {
    setAnsIndex(index);
    if (index === ansIndex && quesIndex === id) {
      setSelectAnswer(!selectAnswer);
    } else {
      setSelectAnswer(false);
    }
    if (val !== null) {
      window.localStorage.setItem(`${id}`, `${val}`);
    }
  };
  const handleClick = () => {
    const answer = window.localStorage.getItem(quesIndex.toString());
    window.localStorage.setItem(`${quesIndex}0`, answer ?? "");
    dispatch(addedSurveyItem(answer ?? ""));

    if (quesIndex < mockQuestions.length - 1) {
      setQuesIndex(quesIndex + 1);
      setAnsIndex(null);
    } else {
      // Clear localStorage after the last question is answered
      window.localStorage.clear();

      // Navigate to the home page
      navigate("/home");
    }
  };
  // const handleClick = () => {
  //   if (quesIndex < mockQuestions.length - 1) {

  //     const answer = window.localStorage.getItem(quesIndex)
  //     window.localStorage.setItem(`${quesIndex}0`,answer ?? '')
  //     dispatch(addedSurveyItem(answer))
  //     setQuesIndex(quesIndex + 1);
  //     setAnsIndex(false)
  //   }
  //   else{
  //     const answer = window.localStorage.getItem(quesIndex)
  //     window.localStorage.setItem(`${quesIndex}0`,answer ?? '')
  //     dispatch(addedSurveyItem(answer))
  //   }
  // };
  const BackClick = () => {
    if (quesIndex !== 0 && quesIndex <= mockQuestions.length - 1) {
      setQuesIndex(quesIndex - 1);
    }
  };

  return (
    <>
      <div className="">
        <div className="h-[160px] bg-gray-300 flex flex-row justify-self-start items-center">
          {quesIndex > 0 && (
            <button
              onClick={BackClick}
              className=" px-3 my-10 mx-6 bg-gray-400 h-[50px] text-2xl font-bold"
            >
              {" "}
              ⬅️ Back
            </button>
          )}

          <h1 className="text-4xl">
            {" "}
            {`${quesIndex + 1}. ${mockQuestions[quesIndex].question}`}
          </h1>
        </div>
      </div>
      <div className="">
        <div className="h-[400px] bg-gray-400 flex flex-col items-center ">
          {mockQuestions[quesIndex].answer.map((val, index) => {
            return (
              <div
                key={index}
                className=" box-border border-spacing-1 border-y-8 shadow-sm  border-x-8  w-6/12 h-[100px]"
              >
                <div
                  onClick={() =>
                    handleAnswersClick(index, mockQuestions[quesIndex].id, val)
                  }
                  className={`cursor-pointer ${index === ansIndex ? colour : ""} flex flex-row justify-between items-center`}
                >
                  <div>
                    <h1 className="text-4xl w-full">{val} </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-fit bg-gray-300 flex flex-col items-center">
        {quesIndex === mockQuestions.length - 1 ? (
          <div
            onClick={handleClick}
            className=" px-3 my-10 mx-6 bg-gray-300 h-[90px] text-3xl font-bold cursor-pointer"
          >
            {"Submit"}
          </div>
        ) : (
          <div
            onClick={handleClick}
            className=" px-3 my-10 mx-6 bg-gray-300 h-[90px] text-3xl font-bold cursor-pointer"
          >
            {"Continue"}
          </div>
        )}
      </div>
    </>
  );
};

// export const Survey =()=>
// {
//   return (
//         <>
//           <div className="">
//             <div className="h-[160px] bg-gray-300 flex flex-row justify-self-start items-center">
//              {
//               mockQuestions.map((question,index)=>
//               {
//                 return (
//                 <>
//                 <h1 key= {index} className="text-4xl">
//                   {question.question}
//                 </h1>
//                 {
//                   question.answer.map((answerOption, answerIndex)=>
//                   {

//                     return(<>
//                     <div key={answerIndex}className=" box-border border-spacing-1 border-y-8 shadow-sm  border-x-8  w-6/12 h-[100px]">
//                     <div className={`cursor-pointer flex flex-row justify-between items-center`}>
//                       <div>
//                         <h1 className="text-4xl w-full"> {answerOption}</h1>
//                       </div>
//                     </div>
//                   </div>
//                     </>)
//                   })

//                 }
//                 </>
//                 )
//               })
//              }

//             </div>
//           </div>
//           <div className="">
//             <div className="h-[400px] bg-gray-400 flex flex-col items-center ">
//               {/* {mockQuestions[quesIndex].answer.map((val, index) => { */}

//                 {/* return ( */}
//                   <div   className=" box-border border-spacing-1 border-y-8 shadow-sm  border-x-8  w-6/12 h-[100px]">
//                     <div   className={`cursor-pointer flex flex-row justify-between items-center`}>
//                       <div>
//                         <h1 className="text-4xl w-full"> </h1>
//                       </div>
//                     </div>
//                   </div>
//                 {/* ); */}

//             </div>
//           </div>
//           <div className="h-fit bg-gray-300 flex flex-col items-center">
//             {/* {quesIndex === mockQuestions.length - 1 ? ( */}
//               <Link to="/home">
//                 <div
//                   // onClick={}
//                   className=" px-3 my-10 mx-6 bg-gray-300 h-[90px] text-3xl font-bold cursor-pointer"
//                 >
//                   {"Submit"}
//                 </div>
//               </Link>
//              {/* : ( */}
//               <div
//                 // onClick={}
//                 className=" px-3 my-10 mx-6 bg-gray-300 h-[90px] text-3xl font-bold cursor-pointer"
//               >
//                 {"Continue"}
//               </div>
//             {/* ) */}
//           </div>
//         </>
//       );
// }
