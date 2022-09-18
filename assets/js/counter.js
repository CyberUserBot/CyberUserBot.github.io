function updateCounter() {
    fetch('https://api.countapi.xyz/update/uimonk?amount=1')
        .then(res => res.json())
        .then(data => counterElement.innerHTML = data.value)
}

updateCounter()

counterElement = document.getElementsByClassName('ziyaretci-sayi')[0];