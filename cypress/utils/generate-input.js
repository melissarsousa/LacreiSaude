export function generateEmail(){
    const randomNumber = Math.floor(Math.random()*1501);
    const randomEmail = 'teste'+randomNumber+'@gmail.com';
    return randomEmail;
}