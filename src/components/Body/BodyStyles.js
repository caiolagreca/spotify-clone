import styled from "styled-components";

export const Container = styled.div`
  .playlist {
    margin: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 950px){
      padding: 0 0 0 4rem;
    }

    .image {
      img {
        height: 15rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px 12px;
        margin: auto;

        @media screen and (max-width: 950px){
          height: 12rem;
        }
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #e0dede;

      .title {
        color: white;
        font-size: 4rem;

        @media screen and (max-width: 950px){
          font-size: 2.5rem;
        }
      }
    }
  }

  .list {

    @media screen and (max-width: 950px){
      padding: 0 1rem 0 1.5rem;
    }
    
    .header__row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      color: #dddcdc;
      margin: 1rem 0 0 0;
      position: sticky;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
      background-color: ${({ headerBackground }) =>
        headerBackground ? "#000000dc" : "none"};
    }

    hr {
      border: 1px solid #b1b1b1;
      width: 95%;
      margin: 0.3rem auto 0.8rem auto;

      @media screen and (max-width: 950px){
        width: 90%;
      }
    }

    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
    }

    .row {
      padding: 0.5rem 1rem;
      display: grid;
      grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;

      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        cursor: pointer;
      }

      .col {
        display: flex;
        algin-items: center;
        color: #dddcdc;

        img {
          height: 3rem;
        }
      }

      .detail {
        display: flex;
        gap: 1rem;

        .info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;

          .name{
            color: white;
            font-size: 17px;
          }

          .artists{
            color: #b3b3b3;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
