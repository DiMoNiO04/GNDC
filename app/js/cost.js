$('.block__content')
    .find('.cost__content-1')
    .each(function () {
        let more = $(this).find('.cost__content-1-inn');
        let hide = $(this).find('.cost__content-1-con');
        hide.hide();
        more.click(function () {
            hide.slideToggle();
            more.toggleClass('active');
        });
    });

$('.block__content')
    .find('.cost__content-2')
    .each(function () {
        let more = $(this).find('.cost__content-2-inn');
        let hide = $(this).find('.cost__content-2-con');
        hide.hide();
        more.click(function () {
            hide.slideToggle();
            more.toggleClass('active');
        });
    });

$('.block__content')
    .find('.cost__content-3')
    .each(function () {
        let more = $(this).find('.cost__content-3-inn');
        let hide = $(this).find('.cost__content-4-con');
        hide.hide();
        more.click(function () {
            hide.slideToggle();
            more.toggleClass('active');
        });
    });

const apiKey = '6e455e4b-9bb8-4311-8d66-d9d4aeddcc1a'; // Замените на свой API-ключ Yandex Suggest
const query = 'санкт'; // Ваш запрос

const apiUrl = `https://suggest-maps.yandex.ru/v1/suggest?apikey=${apiKey}&text=${query}`;


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Обрабатываем результат
    const suggestions = data.items.map(item => {
      const suggestionText = item.value;
      return suggestionText;
    });

    // Выводим список предложений
    document.body.innerHTML = '<h2>Предложения:</h2><ul>' +
      suggestions.map(suggestion => `<li>${suggestion}</li>`).join('') +
      '</ul>';
  })
  .catch(error => console.error('Ошибка при запросе к Yandex Suggest API:', error.message));