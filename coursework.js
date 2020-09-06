function toggleCourseworkExpand(expander, expandee) {
    let wasExpanded = expander.text.includes('-');
    courseworkElt = expandee;
    courseworkElt.style.display = wasExpanded ? "none" : "block";
    expander.text = wasExpanded ? "[+]" : "[-]";
}

console.log('ehllo')

document.querySelectorAll('.coursework-entry').forEach(entry => {
    button = entry.querySelector('a');
    button.onclick(toggleCourseworkExpand(button, entry.querySelector('ul')));
});