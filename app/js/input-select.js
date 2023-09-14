$(document).ready(function () {
    $('.input-file input[type=file]').on('change', function () {
        let file = this.files[0];
        $(this).next().html(file.name);
    });

    // инпут для скачивания файла

    $('.select').on('click', '.select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().slideUp();
        } else {
            $('.select-head').removeClass('open');
            $('.select-list').slideUp();
            $(this).addClass('open');
            $(this).next().slideDown();
        }
    });

    $('.select').on('click', '.select-item', function () {
        $('.select-head').removeClass('open');
				$(this).siblings().removeClass('active')
				$(this).addClass('active')
        $(this).parent().parent().slideUp();
        $(this).parent().parent().prev().text($(this).text());
        $(this).parent().parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select-head').removeClass('open');
            $('.select-list').slideUp();
        }
    });
});

$('.date').mask('99.99.9999', { placeholder: 'дд.мм.гггг' });