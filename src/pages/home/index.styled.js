import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  padding: 5vw 15vw 1vw 15vw;
  column-gap: 1vw;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
`;

export const Input = styled.input`
  height: fit-content;
  margin-bottom: 1vw;
  padding: 0 0.5vw;
  transition: 0.3s;
  font-size: 1.2vw;
  &:hover {
    background-color: #19615a;
  }
  &:focus {
    background-color: #19615a;
  }
  &::placeholder {
    color: white;
    opacity: 0.5;
  }
  &:last-of-type {
    &::placeholder {
      color: white;
      opacity: 0.5;
    }
  }
`;
export const TextArea = styled.textarea`
  height: fit-content;
  margin-bottom: 1vw;
  height: 10vw;
  resize: none;
  transition: 0.3s;
  padding: 0 0.5vw;
  font-size: 1.2vw;

  &:hover {
    background-color: #19615a;
  }
  &:focus {
    background-color: #19615a;
  }
  &::placeholder {
    color: white;
    opacity: 0.5;
  }
`;
export const BtnLeft = styled.button`
  border: 1px solid white;
  padding: 0.5vw 0;
  margin-bottom: 1vw;
  font-size: 1vw;
  transition: 0.3s;
  &:first-of-type {
    &:hover {
      background-color: #19615a;
    }
  }
  &:nth-of-type(2) {
    background-color: ${({ active }) => (active ? '#19615a' : '')};
  }
  &:nth-of-type(3) {
    background-color: ${({ active }) => (active ? '#19615a' : '')};
  }
  &:nth-of-type(4) {
    background-color: ${({ active }) => (active ? '#19615a' : '')};
  }
  &:nth-of-type(5) {
    background-color: ${({ active }) => (active ? '#19615a' : '')};
  }
`;
export const IsEmptyText = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2vw;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  flex-grow: 1;
  padding: 0.5vw;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Task = styled.div`
  user-select: none;
  border: 1px solid white;
  padding: 0.5vw;
  margin-bottom: 0.5vw;
  position: relative;
  transition: 0.3s;
  &:nth-of-type(2){
  }
  background-color: ${({ status }) => status && '#19615a'};
  p {
    font-size: 1vw;
  }
  button {
    position: absolute;
    content: '';
    bottom: 0.4vw;
    right: 0.5vw;
    transform: rotate(45deg) scale(1.1);
    background-color: rgba(0, 0, 0, 0);
    width: 1.5vw;
    height: 1.5vw;
    font-size: 1.7vw;
    display: block;
    line-height: 100%;
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.5vw;
    text-decoration: underline;
    margin-bottom: 0.5vw;
  }
`;
export const A = styled.div``;
