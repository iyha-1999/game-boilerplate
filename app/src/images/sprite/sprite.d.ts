declare module '*.json' {
  type Json = null | boolean | number | string | Array<Json> | JsonObject;
  interface JsonObject {
    [key: string]: Json;
  }
  const jsonMembers: JsonObject;
  export default jsonMembers;
}
