import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayerSpriteCoordinate } from '../../re-ducks/battle/actions';
import styles from '../../css/components/battle.module.css';

const PlusButton = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector);
  return (
      <button type="button" className={styles.plusButton} onClick={() => dispatch(changePlayerSpriteCoordinate({x: 100,y: 100,}))}>
        plus:100
      </button>
  );
};

export default PlusButton;
