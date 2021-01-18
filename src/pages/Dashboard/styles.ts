import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 32px;
  margin-top: -150px;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div<CardProps>`
  background: ${props =>
    props.total ? '#FF872C' : props.theme.colors.backgroundSecundary};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${props => (props.total ? '#fff' : props.theme.colors.title)};
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: translateX(10px);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;

      transition: 0.4s;

      &:hover {
        transform: translateX(10px);
      }
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: ${props => props.theme.colors.backgroundSecundary};
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: ${props => props.theme.colors.title};
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }

    @media (max-width: 600px) {
      max-width: 600px;
      th {
        padding: 10px 16px;
        height: 60px;
      }

      td {
        padding: 10px 10px;

        height: 60px;
      }
    }
  }
`;
