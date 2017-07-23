console.log("script loaded");

// select all divs and give them a purple background
$('div').css('background', 'purple');

// select the divs with class 'highlight' and make them 200px wide
$('.highlight').css('width', '200px');

// select the div with id 'third' and give it an orange border
$('#third').css('border', '2px dashed orange');

// select the first div only
$('div').filter(':first').css('color', 'pink');

var ul = document.querySelector("ul");

var highlighted;
ul.addEventListener('click', function(e){
    if (e.target && e.target.nodeName === 'LI'){
        let item = e.target;
        
        if (highlighted != undefined)
            // remove previous highlight.
            removeOldHighlight(highlighted);
        
        // attach highlight class.
        highlighted = item;
        item.classList.add("highlight");
    }
}, false);

function removeOldHighlight(elem){
    if (elem.classList.contains('highlight'))
        elem.classList.toggle('highlight');
}