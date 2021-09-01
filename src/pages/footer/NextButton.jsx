import styled from "styled-components";
import React from "react";
import { withRouter } from "react-router";
import { view } from "@risingstack/react-easy-state";
import getGlobalState from "../../globalState/getGlobalState";
import setGlobalState from "../../globalState/setGlobalState";

const checkForNextPageConditions = () => {
  const currentPage = getGlobalState("currentPage");
  const configObj = getGlobalState("configObj");

  if (currentPage === "presort") {
    let isPresortFinished = getGlobalState("presortFinished");
    if (isPresortFinished === false) {
      setGlobalState("triggerPresortPreventNavModal", true);
      return false;
    } else {
      return true;
    }
  }
  if (currentPage === "sort") {
    const isSortingFinished = getGlobalState("sortFinished");
    if (isSortingFinished === false) {
      // not finished sorting
      setGlobalState("triggerSortPreventNavModal", true);
      return false;
    } else {
      const hasOverloadedColumn = getGlobalState("hasOverloadedColumn");
      const allowUnforcedSorts = configObj.allowUnforcedSorts;
      // has finished sorting
      if (allowUnforcedSorts === true) {
        // unforced ok -> allow nav
        setGlobalState("triggerSortPreventNavModal", false);
        return true;
      } else {
        // unforced not ok -> allow nav if no overloaded columns
        if (hasOverloadedColumn === true) {
          setGlobalState("triggerSortOverloadedColumnModal", true);
          return false;
        } else {
          setGlobalState("triggerSortPreventNavModal", false);
          return true;
        }
      }
    }
  }

  if (currentPage === "survey") {
    // to turn on pink color for unanswered
    setGlobalState("checkRequiredQuestionsComplete", true);
    const requiredAnswersObj = getGlobalState("requiredAnswersObj");
    const checkArray = [];
    const keys = Object.keys(requiredAnswersObj);
    for (let i = 0; i < keys.length; i++) {
      if (requiredAnswersObj[keys[i]] === "no response") {
        checkArray.push("false");
      }
    }

    if (checkArray.length > 0) {
      setGlobalState("triggerSurveyPreventNavModal", true);
      return false;
    } else {
      return true;
    }
  }

  // for pages without checks
  return true;
};

const LinkButton = (props) => {
  let goToNextPage;

  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props;

  return (
    <NextButton
      {...rest} // `children` is just another prop!
      onClick={(event) => {
        onClick && onClick(event);
        goToNextPage = checkForNextPageConditions();
        if (goToNextPage) {
          history.push(to);
        }
      }}
      tabindex="0"
    />
  );
};
export default view(withRouter(LinkButton));

const NextButton = styled.button`
  border-color: #2e6da4;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: 100px;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, active }) =>
    active ? theme.secondary : theme.primary};

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  &:focus {
    background-color: ${({ theme }) => theme.focus};
  }
`;
