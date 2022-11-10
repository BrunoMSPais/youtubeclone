import styled from 'styled-components';

export const StyledHeader = styled.div`
  margin-top: 50px;

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    gap: 16px;
    /* margin-top: 50px; */

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .user-info-text {
      display: flex;
      flex-direction: column;
      gap: 4px;

      h2, p {
        margin: 0;
        padding: 0;
      }

      p {
        opacity: .5;
      }
    }
  }
`