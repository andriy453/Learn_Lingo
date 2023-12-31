import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 28px;
`;

export const StyledLink = styled(Link)`
    color: var(--secondary);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    padding: 10px 0px ;
`;



export const AuthNavConteiner = styled.div`
    display: flex;
    align-items:center;
    gap:0px 16px;
`
export const LinkLogin = styled(Link)`
    display: flex;
    align-items:center;
    gap:0px 8px;

    color: var(--secondary);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25;
    
`
export const LinkRegister = styled(Link)`
    color: var( --background);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25;


    padding: 14px 39px;
    border-radius: 12px;
    background: var(--secondary);
`
export const LoginLogo = styled.svg`
    width: 20px;
    height: 20px;
`

