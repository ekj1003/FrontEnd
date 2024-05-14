import styled from "styled-components";
import ScoreBox from "./ScoreBox";
import { calcTime } from "utils/calcTime";

interface Props {
  data: {
    date: string;
    goal: number;
    distance: number;
    time: number;
    imgSrc?: string;
  };
}

function RecordCard({ data }: Props) {
  return (
    <Container>
      {data.date}
      <ScoreWrapper>
        <ScoreBox category="목표(km)" value={`${data.goal}`} isSmall />
        <ScoreBox category="km" value={`${data.distance}`} isSmall />
        <ScoreBox
          category="시간"
          value={`${calcTime(data.time, "h").toString().padStart(2, "0")} : ${calcTime(data.time, "m").toString().padStart(2, "0")} : ${(data.time % 60).toString().padStart(2, "0")}`}
          isSmall
        />
      </ScoreWrapper>
    </Container>
  );
}

export default RecordCard;

const Container = styled.div`
  height: 88px;
  padding: 5px 10px;

  color: #c4c4c4;
  font-size: 12px;

  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ScoreWrapper = styled.div`
  display: flex;
`;
