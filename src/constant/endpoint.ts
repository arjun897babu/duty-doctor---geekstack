
export const doctorEndpoints = Object.freeze({
    getOTP:'/mail/send',
    login: '/login',
    register: '/register',
    getProfile: '/:userId',
    logout: '/logout'
})
export const mailEndpoints = Object.freeze({
    sendMail: '/send',
    verifyMail: '/verify',
})