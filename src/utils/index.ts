export const validateEmail = (email: string) => {
    if (!email || !email.length) return false;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    else return false;
}

export const validatePassword = (password: string) => {
    if (!password || password.length < 5) return false;

    return true;
}

export const validateUsername = (userName: string) => {
    if (!userName || userName.length <= 4) return false;

    return true;
}
