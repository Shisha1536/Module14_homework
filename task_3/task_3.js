const btn = document.querySelector('.btn');
let div = document.querySelector('div');
function request(callback){
    const value = Number(document.querySelector('input').value);
    if (value < 1 && value > 10) {
        console.log("число вне диапазона от 1 до 10")
    } else {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${value}`);
        xhr.onload = function() {
            if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
            } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
            }
        };
        
        xhr.onerror = function() {
            console.log('Ошибка! Статус ответа: ', xhr.status);
        };
        
        xhr.send();
            }
};
function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.thumbnailUrl}"
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
    request(displayResult);
  });