const github = new GitHub;
const ui = new UI;
//Search Input
const searchUser = document.querySelector('#searchUser');
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
                    ui.showProfile(data.profile);
                }
            })
    } else {
        //Clear Profile
    }
})