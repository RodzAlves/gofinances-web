import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.primary};
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: ${props => props.theme.colors.color};
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        position: relative;
        padding-bottom: 5px;

        &::after {
          content: '';
          position: absolute;
          height: 2px;
          width: 100%;
          left: 0;
          bottom: 0;
          opacity: 0;
          transform: translateY(3px);
          background: #ff872c;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        &:hover::after {
          opacity: 1;
          transform: translateY(0);
        }

        & + a {
          margin-left: 32px;
        }
      }
    }
  }
`;

export const OptionsHeader = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 25px;
    color: ${props => props.theme.colors.color};
  }
`;
