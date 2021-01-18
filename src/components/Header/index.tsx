import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { Link } from 'react-router-dom';
import { shade } from 'polished';

import { Container, OptionsHeader } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';

  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  toggleTheme,
}: HeaderProps) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container size={size}>
      <header>
        <Link to="/">
          <img src={Logo} alt="GoFinances" />
        </Link>

        <OptionsHeader>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.1, '#FF872C')}
            onColor={shade(0.2, colors.color)}
            offHandleColor={colors.color}
            onHandleColor={colors.color}
          />
          <nav>
            <Link to="/">Listagem</Link>
            <Link to="/import">Importar</Link>
          </nav>
        </OptionsHeader>
      </header>
    </Container>
  );
};

export default Header;
