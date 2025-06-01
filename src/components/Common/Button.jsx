import styled, { css } from 'styled-components';

const variants = {
  modal: css`
    width: 100%;
    height: 44px;
    background: var(--primary-color);
    color: var(--grey-100);
  `,
  gnb: css`
    width: auto;
    height: 40px;
    background: transparent;
    color: inherit;
  `,
};

const Button = styled.button`
  ${({ variant = 'modal' }) => variants[variant] || variants.modal};

  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

export default Button;
