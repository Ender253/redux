import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui';

const CartButton = (props) => {
  const dispatch = useDispatch()
 const cartQantity = useSelector(state=> state.cart.totalQuantity)
const toggleCartHandler = ()=>{
  dispatch(uiActions.toggle())
}

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQantity}</span>
    </button>
  );
};

export default CartButton;
