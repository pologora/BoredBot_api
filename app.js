




fetch('https://apis.scrimba.com/bored/api/activity')
.then(response =>response.json())
.then(data => {
    const div = document.createElement('div')
    div.classList.add('active')
    div.textContent = data.activity
    document.body.append(div)
    console.log(data)
})