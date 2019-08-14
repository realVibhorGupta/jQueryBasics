$('spoiler span').hide()
$('.spoiler').append('<button>Spoiler alert!!</button>')
$('button').on('click', function () {
  $(this).hide()
})
