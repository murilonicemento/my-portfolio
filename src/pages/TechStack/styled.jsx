import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-bottom: 31px;
    background-image: linear-gradient(
      to right,
      rgb(149 114 252),
      rgb(67 231 173),
      rgb(226 212 92)
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  p:nth-child(2) {
    font-weight: 400;
    margin-bottom: 80px;
  }
`;

export const TechStacks = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;

  img {
    width: 70px;
    animation: float 3s infinite;
  }

  /* @for $i from 1 through 8 {
    img:nth-child(#{$i}) {
      animation-delay: -0.2s;
    }
  } */

  img:nth-child(2) {
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
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
