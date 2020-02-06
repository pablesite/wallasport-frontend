export default class User {
    /**
     * Constructor
     * @param {Object} User
     */
  
    constructor(
      username = null,
      email = null,
      password = null,
      favs = [],
    ) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.favs = favs;
    }
  }
  
