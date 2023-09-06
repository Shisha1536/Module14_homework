const jsonString = `
{
    "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }
    ]
}
`;
const jsonDocument = JSON.parse(jsonString);
const list = jsonDocument.list;
console.log(list);