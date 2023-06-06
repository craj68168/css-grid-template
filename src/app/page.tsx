"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  .grid-container {
    display: grid;
    grid-template-areas:
      "header"
      "menu "
      "main"
      "right"
      "footer";
    gap: 10px;
    background-color: #2196f3;
    padding: 10px;
  }
  .item {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }

  .grid-container:nth-child(1) {
    grid-area: header;
  }
  .grid-container:nth-child(2) {
    grid-area: menu;
  }
  .grid-container:nth-child(3) {
    grid-area: main;
  }
  .grid-container:nth-child(4) {
    grid-area: right;
  }
  .grid-container:nth-child(5) {
    grid-area: footer;
  }
`;
const Home = () => {
  return (
    <Wrapper>
      <div className="grid-container">
        <div className="item">Header</div>
        <div className="item">Menu</div>
        <div className="item">Main</div>
        <div className="item">Right</div>
        <div className="item">Footer</div>
      </div>
    </Wrapper>
  );
};
export default Home;
