export type AppAction<Key, Value = void> = Value extends void
  ? { type: Key }
  : { type: Key } & Value;
