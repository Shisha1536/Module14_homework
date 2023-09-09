const btn = document.querySelector('.btn');
let div = document.querySelector('div');
btn.addEventListener('click', () => {
    const width = Number(document.querySelector('.width').value);
    const height = Number(document.querySelector('.height').value);
    if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
        fetch(`https://dummyimage.com/${width}x${height}`)
            .then((response) => {
                return response;
            })
            .then((data) => {
                const cardBlock = `
                    <div class="card">
                    <img
                        src="${data.url}"
                        class="card-image"
                    />
                    </div>
                `;
                div.innerHTML = cardBlock;
            })
            .catch(() => { console.log('error') });
    } else {
        alert("одно из чисел вне диапазона от 100 до 300")
    };          
});