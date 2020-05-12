import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'


const Header = styled.h1`
  cursor: pointer;
  text-align: center;
  font-weight: 900;
  font-size: 1.98818rem;
  line-height: 2.625rem;
  font-family: Montserrat,sans-serif;
  text-rendering: optimizeLegibility;
  color: #fff;
`;

const Aside = styled.aside`
  text-align: center;
  color: #ffa7c4;
  font-weight: 500;
  font-size: 20px;
  font-family: nunito,roboto,proxima-nova,proxima nova,sans-serif;
`;

const App = () => {
  return (
    <div>
        <Header>
          React Starter
        </Header>
        <Aside>Happy hacking!</Aside>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));