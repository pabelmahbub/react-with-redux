
import { useSelector, useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from './store';



//use throughout app instead of paling 'useDispatch' and 'useSelector'
export const useAppDispatch: ()=> AppDispatch = useDispatch;
export const userAppSelector : TypedUseSelectorHook<RootState> = useSelector;
