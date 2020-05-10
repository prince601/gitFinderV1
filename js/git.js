class GitHub {
    constructor() {
        this.client_id = 'b8b2f71dd1bc4583619b';
        this.client_secret = '32c41aece1b9a742a4b8b5ab639c6ed3e63cdaf7';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}