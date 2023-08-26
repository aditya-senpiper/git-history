import secretKey from "./secrets.js";

(function main(secretKey) {
  if (secretKey !== "") console.log("Secret Key is present");
  else console.log("Program failed due to missing secret key");
})(secretKey);
