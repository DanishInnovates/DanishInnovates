function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    document.getElementById('time').innerText = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString('en-US', options);
}
setInterval(updateTime, 1000);
updateTime();
