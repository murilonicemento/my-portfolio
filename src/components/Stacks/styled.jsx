import styled from "styled-components";

export const Stacks = styled.section`
  display: flex;
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 100px;
  }

  img:hover {
    animation: rotate 1.5s alternate;
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
      transform: rotateY(0);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;
