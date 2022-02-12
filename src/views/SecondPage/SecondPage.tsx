import { StyledPageWrapper } from "../Home/Home.style";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { Pages } from "../pages";
import { Counter } from "../../components/Counter/Counter";
import { SyntheticEvent } from "react";
//Store
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard";
import TasksCard from "../../components/TasksCard";
import Ticket from "../../components/Ticket/Ticket";

export const SecondPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const clickHandler = () => {
    console.log("Button works");
    adding();
  };
  const { adding } = bindActionCreators(actionCreators, dispatch);

  const generateKey = (pre: any) => {
    return `${pre}_${new Date().getTime()}`;
  };

  const TicketList = [
    <Ticket title={"Unassigned task"} key={generateKey("task1")} />,
    <Ticket
      title={"Example task"}
      assignedTo={"John Doe"}
      key={generateKey("task2")}
    />,
    <Ticket
      title={"Very long title Very long title Very long title Very long title"}
      assignedTo={"Very long name Very long name Very long name Very long name"}
      key={generateKey("task3")}
    />,
  ];

  return (
    <StyledPageWrapper>
      <Navbar />
      <p>{t("paragraph3")}</p>
      <Link to={Pages.Home} style={{ textDecoration: "none" }}>
        <Button onClick={clickHandler}>{t("button2")}</Button>
      </Link>
      <p>Buttons SX</p>
      <Link to={Pages.Home} style={{ textDecoration: "none" }}>
        <Button variant='text' onClick={clickHandler}>
          Home
        </Button>
      </Link>
      <Button variant='text' onClick={clickHandler}>
        {t("cancelBtn")}
      </Button>
      <Button disabled={true} onClick={clickHandler}>
        {t("continueBtn")}
      </Button>
      <Button long onClick={clickHandler}>
        New Project
      </Button>
      <Button onClick={clickHandler}>{t("createIssueBtn")}</Button>
      <Counter />
      <TasksCard title={"title"} children={TicketList} />
    </StyledPageWrapper>
  );
};
