import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

class Searcher extends Component {
  state = {};
  render() {
    return (
      <AppSearcher>
        <Search>
          <Input type="text" required />
          <Placeholder className="placeholder">
            Write name of art, artist etc.
          </Placeholder>
          <CoverBtn />
          <br />
          <Button>search</Button>
          <SdCoverBtn />
        </Search>
      </AppSearcher>
    );
  }
}

const AppSearcher = styled.div`
  width: 100%;
  height: 50%;
`;

const Search = styled.div`
  width: 280px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 40px;
  font-size: 18px;
  background-color: #282c34;
  border: 2px solid #ccc;
  padding: 12px;
  width: 250px;
  outline: none;
  color: #fff;
  transition: border-color 0.3 ease;
  border-radius: 3px;

  &:valid + .placeholder,
  &:focus + .placeholder {
    top: 0px;
    font-size: 10px;
    color: #fff;
    background-color: #282c34;
  }
`;

const Placeholder = styled.span`
  position: absolute;
  left: 25px;
  top: calc(50% - 60px);
  transform: translateY(-50%);
  color: #aaa;
  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
`;

const move = keyframes`
    to {
      left: 300px;
    }
`;

const CoverBtn = styled.span`
  width: 270px;
  height: 70px;
  margin-top: -5px;
  left: 14px;
  background-color: #282c34;
  position: absolute;
  animation: ${move} 1s 8s ease forwards;
`;

const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 25px;
  width: 250px;
  border: none;
  box-shadow: 0px 5px 10px 0px rgba(2, 2, 2, 0.75);
  color: white;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 3px;
  background-image: linear-gradient(
    to right,
    rgb(182, 94, 94),
    rgb(158, 64, 144)
  );

  &:hover {
    background-image: linear-gradient(
      to right,
      rgb(185, 80, 80),
      rgb(161, 50, 145)
    );
    box-shadow: 0px 0px 5px 0px rgba(219, 219, 219, 0.75);
  }
`;

const SdCoverBtn = styled.span`
  width: 270px;
  height: 70px;
  left: 5px;
  background-color: #282c34;
  position: absolute;
  animation: ${move} 1s 8.1s ease forwards;
`;

export default Searcher;
