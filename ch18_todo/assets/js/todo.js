// check off specific todos by clicking
console.log('script loaded');

// toggle todo list item checked off/ uncheck
$('li').on('click', function(){
    $(this).toggleClass('checked-off');
});

// Clear todo list entry
$('span').on('click', function(){
    $(this).parent().remove();
})