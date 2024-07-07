import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import 'antd/dist/reset.css';
import './styles/ButtonStyles.scss';
import './styles/ShapeStyles.scss'; // Make sure to import shape styles
import LanguageSwitcher from './components/LanguageSwitcher';
import ShapeButton from './components/ShapeButton';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [shapePositions, setShapePositions] = useState<{ [key: string]: number }>({
    circle: 0,
    square: 0,
    triangle: 0
  });

  const moveShape = (shape: string) => {
    setShapePositions((prevPositions) => ({
      ...prevPositions,
      [shape]: prevPositions[shape] + 10
    }));
  };

  const movePosition = () => {
    setShapePositions({
      circle: Math.random() * 100,
      square: Math.random() * 100,
      triangle: Math.random() * 100
    });
  };

  return (
    <div className="App">
      <LanguageSwitcher />
      <div>
        <ShapeButton
          shape="circle"
          onClick={() => moveShape('circle')}
          label={t('moveShape')}
        />
        <ShapeButton
          shape="square"
          onClick={() => moveShape('square')}
          label={t('moveShape')}
        />
        <ShapeButton
          shape="triangle"
          onClick={() => moveShape('triangle')}
          label={t('moveShape')}
        />
      </div>
      <button onClick={movePosition}>{t('movePosition')}</button>
      <div className="shapes-container">
        <div className="shape circle" style={{ left: `${shapePositions.circle}%` }}></div>
        <div className="shape square" style={{ left: `${shapePositions.square}%` }}></div>
        <div className="shape triangle" style={{ left: `${shapePositions.triangle}%` }}></div>
      </div>
    </div>
  );
};

export default App;
