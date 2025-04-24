import styled from "styled-components";

// Container, Label e HelperText continuam como estão
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  color: #3b3b3b;
  font-size: 1rem;
  margin-bottom: 0.2rem;
`;

export const HelperText = styled.p`
  color: #ff0000;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

// ✅ Input com shouldForwardProp
export const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError",
})<{ hasError: boolean }>`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #d1d1d1;

  &:focus {
    outline: none;
    border-color: #639b0b;
  }

  &::placeholder {
    color: #3b3b3b;
  }

  ${({ hasError }) =>
    hasError &&
    `
      border-color: #ff0000;
    `}
`;

// ✅ Select com shouldForwardProp também
export const Select = styled.select.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError",
})<{ hasError: boolean }>`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #d1d1d1;

  &:focus {
    outline: none;
    border-color: #639b0b;
  }

  &::placeholder {
    color: #3b3b3b;
  }

  ${({ hasError }) =>
    hasError &&
    `
      border-color: #ff0000;
    `}
`;
