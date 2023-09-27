"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* .grid-container {
    display: grid;
    grid-template-areas:
      "one"
      "two"
      "three"
      "four"
      "five";
    gap: 10px;
    background-color: #2196f3;
    padding: 10px;
    grid-auto-columns: 1fr;
    .container {
      min-height: 5rem;
      display: grid;
      align-items: center;
    }
    .container:nth-child(1) {
      grid-area: one;
    }
    .container:nth-child(2) {
      grid-area: two;
    }
    .container:nth-child(3) {
      grid-area: three;
    }
    .container:nth-child(4) {
      grid-area: four;
    }
    .container:nth-child(5) {
      grid-area: five;
    }
    .item {
      background-color: rgba(255, 255, 255, 0.8);
      text-align: center;
      padding: 20px 0;
      font-size: 30px;
    }
  } */

  .grid-container {
    background-color: #6b82f1;
    padding: 20px;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;

    .container {
      display: grid;
      align-items: center;
      justify-content: center;
      background-color: whitesmoke;
      min-height: 200px;
    }
   
  }
  @media screen and (min-width:400px){
    .grid-container{
      display: grid;
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media screen and (min-width: 701px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(4,1fr);
    }
    .container:first-child {
      grid-column: 1 / 3; /* grid-column: span 2; */
    }
    .container:nth-child(5) {
      grid-column: 2 / 4;
    }
    .container:nth-child(3) {
      grid-column: 4 / 5;
      grid-row: span 2; // grid-row: 1/3;
      height: 100%;
    }
  }


  /* @media (min-width: 50em) {
    .grid-container {
      display: grid;
      grid-template-areas:
        "one one two five"
        "three four four five";
      .container {
        min-height: 10rem;
        display: grid;
        align-items: center;
      }
    }
  } */
`;
