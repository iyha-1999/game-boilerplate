import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../../re-ducks/battle/actions';
import { Stage } from '@inlet/react-pixi';

const Battle = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector);
  return (
    <Stage width={1920} height={1080}>
    </Stage>
    // <div className="App">

    //   <header className="App-header">
    //     <div>Battle</div>
    //     <div>
    //       <button
    //         type="button"
    //         onClick={() =>
    //           dispatch(
    //             signInAction({
    //               isSignedIn: true,
    //               uid: '0001',
    //               userName: 'jonpos',
    //             })
    //           )
    //         }
    //       >
    //         user001:button
    //       </button>
    //     </div>
    //     <div>
    //       <button
    //         type="button"
    //         onClick={() =>
    //           dispatch(
    //             signInAction({
    //               isSignedIn: true,
    //               uid: '0002',
    //               userName: 'popos',
    //             })
    //           )
    //         }
    //       >
    //         user002:button
    //       </button>
    //     </div>
    //     <div>コンソールでstoreを確認</div>
    //   </header>
    // </div>
  );
};

export default Battle;
