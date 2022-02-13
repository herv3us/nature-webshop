import { Product } from '../models/Product';

export const countTotalValue = (cart: Product[]) => {
  const count: [number] = [0];

  if (cart?.length > 0) {
    cart?.map((item) => {
      count.push(item.price * item.inCart);
    });

    const sum = count.reduce(function (a, b) {
      return a + b;
    }, 0);

    return sum;
  }
};
