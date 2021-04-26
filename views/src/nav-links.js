var nl = document.querySelector('#nav-links');
for (var i = nl.children.length; i >= 0; i--) {
    nl.appendChild(nl.children[Math.random() * i | 0]);
}