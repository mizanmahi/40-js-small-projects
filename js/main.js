let htmlElemArr = [
   "h2",
   "div",
   "h1",
   "span",
   "h3",
   "section",
   "main",
   "header",
];

function decent(str) {

   let strArr = str.split(".");
   let classArr = [];

   strArr.forEach((el) => {
      htmlElemArr.some((htmlEl) => {
         if (htmlEl === el) {
            classArr.push(htmlEl);
         }
      });

      if (el.includes("--")) {
         let slice = el.slice(0, el.indexOf("--"));
         classArr.push(`[class=*="${slice + "--"}"]`);
      }
   });

   console.log(classArr.join(""));
}

decent("div.heading--2eONR.heading-2--1OnX8.title--3yncE.block--3v-Ow");
