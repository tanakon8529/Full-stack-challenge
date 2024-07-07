// src/components/ShapeButton.tsx
import React from 'react';
import { Button } from 'antd';
import '../styles/ButtonStyles.scss';

type ShapeButtonProps = {
  shape: 'circle' | 'square' | 'triangle';
  onClick: () => void;
  label: string;
};

const ShapeButton: React.FC<ShapeButtonProps> = ({ shape, onClick, label }) => {
  return (
    <Button className={`shape-button ${shape}`} onClick={onClick}>
      {label}
    </Button>
  );
};

export default ShapeButton;
