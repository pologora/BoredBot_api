
const buttonGetActivity = document.querySelector('.button-change-activity')
const activityContainer = document.querySelector('.activity-container')


const getActivity = () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(res =>res.json())
    .then(data => {
        console.log(data)
        activityContainer.textContent = data.activity
    })
}

buttonGetActivity.addEventListener('click', getActivity)


