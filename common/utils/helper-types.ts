export type AllowedHttpMethods = 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch' | 'options';
export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;