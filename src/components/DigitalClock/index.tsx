import { useEffect, useState } from "react";
import styled from "styled-components";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <Container>
      <div className="box">
        <div className="date">
          {String(
            time.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          )}
        </div>
        <div className="clock">
          <span id="hr">{String(time.getHours()).padStart(2, "0")}</span>
          <span>:</span>
          <span id="min">{String(time.getMinutes()).padStart(2, "0")}</span>
          <span>:</span>
          <span id="sec">{String(time.getSeconds()).padStart(2, "0")}</span>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 800px;
  height: 300px;
  position: relative;
  background: #222830;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 24px;
  .box {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;

    .date {
      font-size: 3rem;
    }
    .clock {
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(40px);
      color: #6e7f92;
      z-index: 2;
      span {
        font-size: 2.5rem;
        width: 110px;
        display: inline-block;
        text-align: center;
        position: relative;
        &::after {
          font-size: 16px;
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      #hr::after {
        content: "HOURS";
        color: #0f0;
        font-weight: 600;
        margin-bottom: -5px;
      }
      #min::after {
        content: "MINUTES";
        color: #0ff;
        font-weight: 600;
        margin-bottom: -5px;
      }
      #sec::after {
        content: "SECONDS";
        color: #ff0;
        font-weight: 600;
        margin-bottom: -5px;
      }
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 900px;
    background-image: linear-gradient(
      180deg,
      rgb(0, 183, 255),
      rgb(255, 48, 255)
    );
    height: 60%;
    animation: rotBG 5s linear infinite;
    transition: all 0.2s linear;
  }
  &::after {
    content: "";
    position: absolute;
    background: #1d232a;
    inset: 5px;
    border-radius: 16px;
  }

  @keyframes rotBG {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default DigitalClock;
