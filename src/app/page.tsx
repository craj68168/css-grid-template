"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  .grid-container {
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
    grid-auto-colums: 1fr;
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
  }

  @media (min-width: 50em) {
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
  }
`;
const Home = () => {
  return (
    <Wrapper>
      <div className="grid-container">
        <div className="container item">One</div>
        <div className="container item">Two</div>
        <div className="container item">Three</div>
        <div className="container item">Four</div>
        <div className="container item">Five</div>
      </div>
    </Wrapper>
  );
};
export default Home;
