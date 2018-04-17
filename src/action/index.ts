const INCREASE = 'INCREASE';
interface Increase {
  type: string;
  amount: number;
}

const DECREASE = 'DECREASE';
interface Decrease {
  type: string;
  amount: number;
}

export function increase(n: number): Increase {
  return {
    type: INCREASE,
    amount: n,
  };
}

export function decrease(n: number): Decrease {
  return {
    type: DECREASE,
    amount: n,
  };
}
