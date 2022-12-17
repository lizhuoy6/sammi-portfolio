import { loginHandler } from "next-password-protect";

export default loginHandler("welcome", {
  // Options go here (optional)
  cookieName: "next-password-protect",
});
