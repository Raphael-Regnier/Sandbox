const input = document.getElementById('fname');
const counter = document.getElementById('character-count');

input.addEventListener('input', function() {
    const used = this.value.length;
    const remaining = 80 - used;
    counter.textContent = `${used}/80 characters`;
    // counter.textContent = `${used}/80 characters (${remaining} remaining)`;
});