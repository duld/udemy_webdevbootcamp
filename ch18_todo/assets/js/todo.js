// check off specific todos by clicking
// console.log('script loaded');

var todoTextBox = $('input[type="text"]');


// toggle todo list item checked off/ uncheck
$('ul').on('click', 'li', function(event){
    $(this).toggleClass('checked-off');
    event.stopPropagation();
});


// Clear todo list entry
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});


// text box input
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        $('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoTextBox.val() + "</li>");
        todoTextBox.val("");
    }
})


$('h1 i').on('click', function(){
    // hide or show the input field
    $('input').fadeToggle();
});