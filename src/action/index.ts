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

const LOGIN = 'LOGIN';
export interface Login {
  type: string;
  id: string;
  password: string;
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

export function login(id: string, password: string): Login {
  return {
    type: LOGIN,
    id,
    password,
  };
}
