import React, { useState, useEffect } from 'react';




export default function DropDownFaq(props) {

    
    const [faqArrayClassName, setFaqArrayClassName] = useState([" "," "," "," "]);
    let newArray = faqArrayClassName.map(item => {return item}); 

    function handleClick(number){
        newArray = [" "," "," "," "]; 
        faqArrayClassName[number] == " " ? newArray[number] = " displayFaqText" : newArray[number] = " "; 
        setFaqArrayClassName(newArray)
    }





  return (
    <div className="DropDownFaq ">

      <div  className="faqSubjectAndTextContainer">
        <div onClick={()=>handleClick(0)} className="faqSubjectAndArrow">
        <p  className="faqSubject">{props.subject1}</p>
            <span class="material-symbols-outlined faqSubjectArrow">
                expand_more
            </span>
        </div>

        <div className={"faqTextContainer " + faqArrayClassName[0]} >
          <p className="faqText">{props.text1}</p>
          
        </div>
      </div>


      <div className="faqSubjectAndTextContainer">
      <div onClick={()=>handleClick(1)} className="faqSubjectAndArrow">
        <p  className="faqSubject">{props.subject2}</p>
            <span class="material-symbols-outlined faqSubjectArrow">
                expand_more
            </span>
        </div>        <div className={"faqTextContainer " + faqArrayClassName[1]} >
          <p className="faqText">{props.text2}</p>
        </div>
      </div>



      <div className="faqSubjectAndTextContainer">
      <div onClick={()=>handleClick(2)} className="faqSubjectAndArrow">
        <p  className="faqSubject">{props.subject3}</p>
            <span class="material-symbols-outlined faqSubjectArrow">
                expand_more
            </span>
        </div>        <div className={"faqTextContainer " + faqArrayClassName[2]} >
          <p className="faqText">{props.text3}</p>
        </div>
      </div>


      <div className="faqSubjectAndTextContainer">
      <div onClick={()=>handleClick(3)} className="faqSubjectAndArrow">
        <p  className="faqSubject">{props.subject4}</p>
            <span class="material-symbols-outlined faqSubjectArrow">
                expand_more
            </span>
        </div>        <div className={"faqTextContainer " + faqArrayClassName[3]} >
          <p className="faqText">{props.text4}</p>
        </div>
      </div>


      <div className="faqSubjectAndTextContainer">
      <div onClick={()=>handleClick(4)} className="faqSubjectAndArrow">
        <p  className="faqSubject">{props.subject1}</p>
            <span class="material-symbols-outlined faqSubjectArrow">
                expand_more
            </span>
        </div>        <div className={"faqTextContainer " + faqArrayClassName[4]} >
          <p className="faqText">{props.text5}</p>
        </div>
      </div>
    </div>
  );
}
