const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type equalTupleObject<T extends readonly (string | number)[]> = {
  [key in T[number]]: key;
};

const test: equalTupleObject<["tesla"]> = { "tesla": "tesla" };
