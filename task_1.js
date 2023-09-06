let list = new Array();
const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
const students = xmlDocument.querySelectorAll("student");
for (const student of students) {
    const name = student.querySelector("name");
    const first = student.querySelector("first").textContent;
    const second = student.querySelector("second").textContent;
    const age = student.querySelector("age").textContent;
    const prof = student.querySelector("prof").textContent;
    const lang = name.getAttribute('lang');
    const result = {
      "name": `${first} ${second}`,
      "age": Number(age),
      "prof": prof,
      "lang": lang
  };
    list.push(result);
};

console.log("list: ", list);