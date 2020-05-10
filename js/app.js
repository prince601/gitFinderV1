//Search Input
const searchUser = document.querySelector('#searchUser');
const github = new GitHub;
//search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;
    if (userText !== '') {
        //Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //show alert
                } else {
                    //Show Profile
                }
            })
    } else {
        //Clear Profile
    }
})