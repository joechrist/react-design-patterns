import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

// Component - SPlitScreen Layout Component pattern
// Left and Right with capital first letter are Components
const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  // if chidren's are an array we use an array. Here we consider that's an array
  // Use '{}' to displayed children data in the 'return()' method
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
