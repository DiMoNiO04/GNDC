$(document).ready(function () {
    $('.input-file input[type=file]').on('change', function () {
        let file = this.files[0];
        $(this).next().html(file.name);
    });

    // инпут для скачивания файла

    $('.select').on('click', '.select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select-item', function () {
        $('.select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
        }
    });
});

$('.date').mask('99.99.9999', { placeholder: 'дд.мм.гггг' });



  function inputDatalist(event) {
    const targetContainer = $(event.target).closest('.input-datalist-form');

    if (targetContainer) {
      const inputBlock = targetContainer;
      const datalist = targetContainer.find('.input-datalist-form__list');
      const input = targetContainer.find('input');
      const inputMainBlock = targetContainer.find('.input-datalist-form__block');
      const option = targetContainer.find('option');

      targetContainer
        .each(function () {
          $(this).find('.input-datalist-form__list').not(datalist).slideUp();
          $(this).find('.input-datalist-form__block').not(inputMainBlock).removeClass('active');
        });

      datalist.slideToggle();
      inputMainBlock.toggleClass('active');

      datalist.find('option').each(function () {
        $(this).on('click', function () {
          input.val($(this).html());
          inputBlock.addClass('checked');
          option.not($(this)).removeClass('active');
          $(this).addClass('active');
        });
      });

      input.on('input', () => {
        const inputValue = input.val().toLowerCase().trim();
        option.each(function () {
          const optionValue = $(this).text().toLowerCase();
          if (optionValue.indexOf(inputValue) === 0) {
            $(this).css('display', 'block');
          } else {
            $(this).css('display', 'none');
          }
        });
      });
    }
  }

  $('.input-datalist-form').on('click', (event) => {
    inputDatalist(event);
  });
