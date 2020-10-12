export const isDevelopment = process.env.NODE_ENV === "development";
export const remoteServerURL = isDevelopment
  ? "http://localhost:3002"
  : "https://where-to.world/backend";
