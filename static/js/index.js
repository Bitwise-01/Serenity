'use strict';

const loader = $('#loader');
const btnSend = $('#btn-send');
const editor = $('#editor');
const target = $('#target');

btnSend.click(() => {
    if (editor.text().length <= 0 || target.val().length <= 0) {
        return;
    }

    startLoading();

    $.ajax({
        type: 'POST',
        url: '/send',
    }).done((resp) => {
        const status = resp['status'];

        if (status != 0) {
            console.log(resp);
        }

        stopLoading();
        clearInput();
    });
});

function clearInput() {
    editor.text('');
    $('.input-section').val('');
}

function startLoading() {
    loader.prop('hidden', false);
    btnSend.prop('hidden', true);
}

function stopLoading() {
    loader.prop('hidden', true);
    btnSend.prop('hidden', false);
}
