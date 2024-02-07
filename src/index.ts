import { writeFileSync } from "fs";
import { Template as AR } from "./react/apple-receipt";
import { Template as AV } from "./react/email-verification";
import { render as CON } from "./html/content";

(async () => {
  const content = CON({
    //lang: "en",
    //rid: 1,
    themeID: "themeID",
    currentPath: "/",
    baseURL: "",
    app: {} as any,
    tenant: {} as any,
  }).children;
  //const content = MyComponent({});
  writeFileSync(
    "./results/both-problem/content.html",
    content.children,
    "utf-8"
  );
  console.log("CON2 done");
})();

(async () => {
  const AppleReceipt = new AR();
  const render = await AppleReceipt.handler();
  writeFileSync("./results/both-problem/receipt.html", render.html, "utf-8");
  if (render.text)
    writeFileSync("./results/both-problem/receipt.txt", render.text, "utf-8");
  writeFileSync(
    "./results/both-problem/receipt.plain.txt",
    render.plain,
    "utf-8"
  );
  writeFileSync(
    "./results/both-problem/receipt.json",
    JSON.stringify(render, null, 2),
    "utf-8"
  );
  console.log("AR done");
})();

(async () => {
  const EmailVerification = new AV();
  const render = await EmailVerification.handler("en", {
    companyName: "TEST COMPANY",
    otp: "123456",
  });
  writeFileSync("./results/both-problem/verification.html", render.html, "utf-8");
  if (render.text)
    writeFileSync(
      "./results/both-problem/verification.txt",
      render.text,
      "utf-8"
    );
  writeFileSync(
    "./results/both-problem/verification.plain.txt",
    render.plain,
    "utf-8"
  );
  writeFileSync(
    "./results/both-problem/verification.json",
    JSON.stringify(render, null, 2),
    "utf-8"
  );
  console.log("AV done");
})();
