declare module "restc" {
  export function koa2(): () => any;
  export function koa(): () => any;
  export function express(): () => any;
  export function hapi(): () => any;
  export function hapiOld(): () => any;
}
