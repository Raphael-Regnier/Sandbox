const input = document.getElementsByTagName('input');
const counter = document.getElementsByClassName('character-count');

input.addEventListener('input', function() {
    const used = this.value.length;
    const remaining = 80 - used;
    counter.textContent = `${used}/80`;
    // counter.textContent = `${used}/80 (${remaining} remaining)`;
});