import { AsyncLocalStorage } from "async_hooks";

export const context = new AsyncLocalStorage<Map<any, any>>();
