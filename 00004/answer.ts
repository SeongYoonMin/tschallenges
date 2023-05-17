type readOnlyTypes<T> = {
  readonly [K in keyof T]: T[K];
};
interface Todo {
  title: string;
  description: string;
}
const todos: readOnlyTypes<Todo> = {
  title: "hey",
  description: "foobar",
};