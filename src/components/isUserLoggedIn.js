const isUserLoggedIn = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return !!currentUser; // Returns true if currentUser is not null or undefined
  };

export default isUserLoggedIn;