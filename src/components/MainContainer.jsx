import React, { useState } from "react";
import "./mainContainer.css";

let copyedtext;
let boldtext;
let underlinetext;
let charlen;

const MainContainer = () => {
  const [normaltext, updatedtext] = useState();

  function changeFun1(e) {
    charlen = e.target.value.length;
    updatedtext(e.target.value);
  }

  function textareaClickFun() {
    copyedtext = "";
    boldtext.style.fontWeight = "400";
    underlinetext.style.textDecoration = "none";
  }

  function copyFun() {
    alert("Text Coppied Successfully");
    var copytext = document.getElementById("textid");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
  }

  function ResetFun() {
    updatedtext("");
    charlen = 0;
    copyedtext = "Reset Successful ✔";
  }

  function UppercaseFun() {
    let newtext = normaltext.toUpperCase();
    updatedtext(newtext);
    copyedtext = "Converted To Uppercase ✔";
  }

  function LowercaseFun() {
    let newtext = normaltext.toLowerCase();
    updatedtext(newtext);
    copyedtext = "Converted To LowerCase ✔";
  }

  function BoldFun() {
    boldtext = document.getElementById("textid");
    boldtext.style.fontWeight = "bold";
  }

    function rmvsymbols() {
      let newText = normaltext.replace(/[^a-zA-Z0-9 ]/g, "");
      updatedtext(newText);
      copyedtext = "Symbols Remove Successfully ✔";

    }


    

  return (
    <>
      <section className="mainsection">
        <div className="copycont">
          <p id="copytext">{copyedtext}</p>
          <input type="button" onClick={copyFun} id="copybtn" value="Copy" />
        </div>
        <div className="MainCont">
          <textarea
            id="textid"
            cols="0"
            value={normaltext}
            onChange={changeFun1}
            onClick={textareaClickFun}
            rows="10"
            placeholder="Enter Text Here..."
          ></textarea>
        </div>

        <div className="mainCont-btns">
          <input type="button" onClick={ResetFun} value="RESET" id="m-c-b1" />
          <input
            type="button"
            onClick={UppercaseFun}
            value="UPPERCASE"
            id="m-c-b2"
          />
          <input
            type="button"
            onClick={LowercaseFun}
            value="LOWERCASE"
            id="m-c-b3"
          />
          <input type="button" 
            onClick={BoldFun} 
            value="BOLD" 
            id="m-c-b4" />
          <input
            type="button"
            onClick={rmvsymbols}
            value="RMV SYM"
            id="m-c-b5"
          />
        </div>

        <div className="textsummery">
          <h4>Your Text Summary :-</h4>
          <p> {charlen} Characters...</p>
        </div>
      </section>
    </>
  );
};

export default MainContainer;
