import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import { v4 as uuid } from "uuid";

const getOptionsArray = (options) => {
  let array = options.split(";");
  array = array.filter(function (e) {
    return e;
  });
  return array;
};

const SurveyRatings10Element = (props) => {
  const optsArray = getOptionsArray(props.opts.options);

  //   const nameValue = `question${props.opts.qNum}`;

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  const RadioItems = () => {
    const radioList = optsArray.map((item, index) => (
      <ItemContainer onChange={handleChange} key={`div-${index}`}>
        <span key={uuid()}>{item}</span>
        <RadioInput
          key={uuid()}
          id={`Q-${index}`}
          type="radio"
          value={1}
          name={`qNum${props.opts.qNum}-${index + 1}`}
        />
        <RadioInput
          key={uuid()}
          id={`Q2-${index}`}
          type="radio"
          value={2}
          name={`qNum${props.opts.qNum}-${index + 1}`}
        />
        <RadioInput
          key={uuid()}
          id={`Q3-${index}`}
          type="radio"
          value={3}
          name={`qNum${props.opts.qNum}-${index + 1}`}
        />
        <RadioInput
          key={uuid()}
          id={`Q4-${index}`}
          type="radio"
          value={4}
          name={`qNum${props.opts.qNum}-${index + 1}`}
        />
        <RadioInput
          key={uuid()}
          id={`Q5-${index}`}
          type="radio"
          value={5}
          name={`qNum${props.opts.qNum}-${index + 1}`}
        />
        <RadioInput
          key={uuid()}
          id={`Q6-${index}`}
          type="radio"
          value={6}
          name={`qNum${props.opts.qNum}-${index + 1}`}
        />
        <RadioInput
          key={uuid()}
          id={`Q7-${index}`}
          type="radio"
          value={7}
          name={`qNum${props.opts.qNum}-${index + 1}`}
        />
        <RadioInput
          key={uuid()}
          id={`Q8-${index}`}
          type="radio"
          value={8}
          name={`qNum${props.opts.qNum}-${index + 1}`}
        />
        <RadioInput
          key={uuid()}
          id={`Q9-${index}`}
          type="radio"
          value={9}
          name={`qNum${props.opts.qNum}-${index + 1}`}
        />
        <RadioInput
          key={uuid()}
          id={`Q10-${index}`}
          type="radio"
          value={10}
          name={`qNum${props.opts.qNum}-${index + 1}`}
        />
      </ItemContainer>
    ));
    return <div>{radioList}</div>;
  };

  return (
    <Container>
      <TitleBar>{props.opts.label}</TitleBar>
      <RadioContainer>
        <RatingTitle>
          <div />
          <CircleDiv>1</CircleDiv>
          <CircleDiv>2</CircleDiv>
          <CircleDiv>3</CircleDiv>
          <CircleDiv>4</CircleDiv>
          <CircleDiv>5</CircleDiv>
          <CircleDiv>6</CircleDiv>
          <CircleDiv>7</CircleDiv>
          <CircleDiv>8</CircleDiv>
          <CircleDiv>9</CircleDiv>
          <CircleDiv>10</CircleDiv>
        </RatingTitle>
        <RadioItems />
      </RadioContainer>
    </Container>
  );
};

export default view(SurveyRatings10Element);

const Container = styled.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1100px;
  background-color: whitesmoke;
  min-height: 200px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 5px;
  height: auto;
  min-height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`;

const ItemContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 28vw 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px;
  margin-bottom: 17px;
  font-size: 16px;
  align-items: end;
`;

const RatingTitle = styled.div`
  display: inline-grid;
  grid-template-columns: 28vw 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px;
  margin-bottom: 7px;
  align-items: end;
`;

const CircleDiv = styled.div`
  display: flex;
  justify-self: center;
  align-self: start;
  text-align: center;
`;

const RadioInput = styled.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
`;
