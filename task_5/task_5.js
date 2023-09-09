const btn = document.querySelector('.btn');
let div = document.querySelector('div');
let myJson = localStorage.getItem('myJson');
if (myJson) {
    let data = JSON.parse(myJson)
    let cards = '';
    data.forEach(item => {
    const cardBlock = `
        <div class="card">
        <img
            src="${item.url}"
            class="card-image"
        />
        <p>${item.title}</p>
        </div>
    `;
    cards = cards + cardBlock;
    });
    div.innerHTML = cards;
}
btn.addEventListener('click', () => {
    const page = Number(document.querySelector('.page').value);
    const limit = Number(document.querySelector('.limit').value);
    if (page >= 1 && page <= 10 && limit >= 1 && limit <= 10) {
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                localStorage.setItem("myJson", JSON.stringify(data));
                let cards = '';
                data.forEach(item => {
                const cardBlock = `
                    <div class="card">
                    <img
                        src="${item.url}"
                        class="card-image"
                    />
                    <p>${item.title}</p>
                    </div>
                `;
                cards = cards + cardBlock;
                });
                div.innerHTML = cards;
            })
            .catch(() => { console.log('error') });
    } else if (page < 1 || page > 10 && (limit < 1 || limit > 10)) {
        alert("Номер страницы и лимит вне диапазона от 1 до 10")
    } else {
        if (page < 1 || page > 10) {
            alert("Номер страницы вне диапазона от 1 до 10")
        } else {
            alert("Лимит вне диапазона от 1 до 10")
        }
    };          
});