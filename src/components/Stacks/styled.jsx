import styled from "styled-components";

export const Stacks = styled.section`
  display: flex;
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    transition: 2s;
  }

  div:hover {
    p {
      display: inline;
    }
  }

  img {
    width: 100px;
    animation: 3s infinite;
  }

  p {
    text-align: justify;
    position: absolute;
    top: 300px;
    display: none;
    font-weight: 700;
  }

  /* @for $i from 1 through 8 {
    img:nth-child(#{$i}) {
      animation-delay: -0.2s;
    }
  } */

  /* img:nth-child(2) {
    animation-delay: 0.2s;
  }

  img:nth-child(3) {
    animation-delay: 0.4s;
  }

  img:nth-child(4) {
    animation-delay: 0.6s;
  }

  img:nth-child(5) {
    animation-delay: 0.8s;
  }

  img:nth-child(6) {
    animation-delay: 1s;
  }

  img:nth-child(7) {
    animation-delay: 1.2s;
  }

  img:nth-child(8) {
    animation-delay: 1.4s;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
  } */

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
