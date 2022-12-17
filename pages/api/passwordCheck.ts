import { passwordCheckHandler } from "next-password-protect";

export default passwordCheckHandler("welcome", {
  // Options go here (optional)
  cookieName: "next-password-protect",
});
