import React from "react"
import styled from "styled-components"

function RadioButton({ onChange, name }) {
   return (
      <RadioGroup>
         <div className="form-group">
            <label>
               <input
                  type="radio"
                  name={name}
                  value="USER"
                  className="real-radio"
                  onChange={onChange}
               />
               <span className="custom-radio"> </span>
               Member
            </label>
         </div>
         <div className="form-group">
            <label>
               <input
                  type="radio"
                  name={name}
                  value="ADMIN"
                  className="real-radio"
                  onChange={onChange}
               />
               <span className="custom-radio"> </span>
               Admin
            </label>
         </div>
      </RadioGroup>
   )
}

export default RadioButton

const RadioGroup = styled.div`
   display: flex;
   gap: 25px;
   margin: 19px 186px 10px 0;
   width: 205px;
   height: 24px;
   .real-radio {
      width: 0;
      height: 0;
      position: absolute;
      opacity: 0;
      z-index: -1;
   }

   .custom-radio {
      position: relative;
      display: inline-block;
      width: 20px;
      height: 20px;
      background: #ffffff;
      border: 2px solid #298eea;
      border-radius: 50%;
      vertical-align: text-top;
      margin-right: 12px;
   }

   .custom-radio::before {
      content: "";

      display: inline-block;
      width: 14px;
      height: 14px;
      background: #298eea;
      border-radius: 50%;

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);

      transition: 0.1s ease-in;
   }

   .real-radio:checked + .custom-radio::before {
      transform: translate(-50%, -50%) scale(1);
   }
`
