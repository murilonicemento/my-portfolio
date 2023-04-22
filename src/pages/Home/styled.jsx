import styled from "styled-components";

export const Container = styled.div`
  #presentation {
    width: 50%;
    margin-top: 230px;
    margin-bottom: 20px;
  }

  span {
    background-image: linear-gradient(to right, #ee5d43, #f39c12);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  #curriculum {
    width: 180px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
    font-weight: 500;
    padding: 8px;
    border: 2.5px solid #ee5d43;
    border-radius: 7px;
    transition: border-color 0.5s ease;

    img {
      width: 20px;
      height: 20px;
    }
  }

  #curriculum:hover {
    border: 2.5px solid #f39c12;
  }

  #developerPicture {
    width: 150px;
    float: right;
    margin-top: -180px;
  }

  @media (min-width: 800px) {
    #presentation {
      font-size: 28px;
      font-weight: 700;
    }

    #developerPicture {
      width: 420px;
      margin-top: -250px;
    }
  }
`;
