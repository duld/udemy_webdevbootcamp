// check off specific todos by clicking
console.log('script loaded');


$('li').on('click', function(){
    $(this).toggleClass('checked-off');
});