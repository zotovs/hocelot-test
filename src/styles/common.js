import styled from 'styled-components';

export const ArrowBorderWrapper = styled.div`
  border: ${props => props.theme.border};
  border-radius: 2px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${props => props.theme.grey};
  }
`;
