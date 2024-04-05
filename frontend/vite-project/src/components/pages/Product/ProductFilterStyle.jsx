import styled from 'styled-components';

const FilterButton = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const FilterContent = styled.div`
  background: #888;
  border-radius: 20px;
  padding: 0 10px;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  transition: visibility 0.3s, opacity 0.3s;
  display: flex;
  flex-direction: column;
`;

const LocationList = styled.ul`
  white-space: nowrap;
  padding: 0 10px;
  list-style:none;
  width: 50%;
  display: flex;
  flex-direction: column;

`;

const UniversityList = styled.ul`
  white-space: nowrap;
  padding: 0 10px;
  list-style:none;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const LocationItem = styled.li`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: center;
  padding: 3px 5px;
  cursor: pointer;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
  &.selected {
    background: #D4D4D4;
    border-radius: 20px;
  }
`;

const FilterList = styled.div`
  display: flex;
  flex-direction: row;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
`;

const FilterInButton = styled.button`
  display: flex;
  width: auto;
  height: auto;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border: 1px solid #009DFF;
  border-radius: 20px;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: center;
  white-space:nowrap;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed; 
  }
`;

export { FilterButton, FilterContent, LocationList, UniversityList, LocationItem, FilterList, Buttons, FilterInButton };