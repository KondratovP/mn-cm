import { createMutableSource, useMutableSource } from "./mutableSource";

export function makeUseContext<T extends {}>(sharedState: T) {
  const globalStore = ({
    state: { ...sharedState },
    version: 0,
    listeners: new Set<() => any>()
  });

  const globalStoreSource = createMutableSource(
    globalStore,
    (store) => store.version
  );

  const cache = new Map();

  const getSnapshot = (store: typeof globalStore) => {
    const setState = (
      cb: (prevState: typeof store.state) => typeof store.state
    ) => {
      store.state = cb({ ...store.state });
      store.version++;
      store.listeners.forEach((listener) => listener());
    };
    if (!cache.has(store.state) || !cache.has(store)) {
      cache.clear();
      cache.set(store.state, [{ ...store.state }, setState]);
      cache.set(store, store);
    }

    return cache.get(store.state) as [typeof store.state, typeof setState];
  };
  const subscribe = (store: typeof globalStore, callback: () => void) => {
    store.listeners.add(callback);
    return () => store.listeners.delete(callback);
  };

  function useContext() {
    return useMutableSource(globalStoreSource, getSnapshot, subscribe);
  }
  return useContext;
}
