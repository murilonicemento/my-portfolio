import styled from "styled-components";

export const Container = styled.div`
  #presentation {
    width: 50%;
    margin-top: 230px;
    margin-bottom: 20px;
  }

  span {
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

  #curriculum {
    width: 180px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
    font-weight: 500;
    padding: 8px;
    border: 2.5px solid rgb(149 114 252);
    border-radius: 7px;
    transition: border-color 0.5s ease;

    img {
      width: 20px;
      height: 20px;
    }
  }

  #curriculum:hover {
    border: 2.5px solid rgb(67 231 173);
  }

  #profilePicture {
    width: 150px;
    position: absolute;
    top: 300px;
    right: 20px;
    border-radius: 50%;
  }

  @media (min-width: 800px) {
    #presentation {
      font-size: 28px;
      font-weight: 700;
    }

    #profilePicture {
      width: 349px;
      top: 230px;
      right: 40px;
    }
  }
`;
