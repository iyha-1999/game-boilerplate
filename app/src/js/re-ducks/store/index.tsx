import {
  // reduxのcreateStoreをreduxCreateStoreへ命名を変更し、インポートする
  createStore as reduxCreateStore,
  combineReducers,
} from 'redux';

// Import reducers
import BattleReducer from '../battle/reducers';

export default function createStore() {
  // reduxのcreateStoreメソッドの別名
  return reduxCreateStore(combineReducers({ battle: BattleReducer }));
}
