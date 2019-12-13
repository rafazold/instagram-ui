import * as yup from 'yup';

let schema = yup.object().shape({
    name: yup.string().min(2).max(255),
    username: yup.string().min(2).max(255),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{2,}$/, 'Password must contain at least: 1 lower case and 1 upper case').min(2).max(16),
    gender: yup.string(),
    birthDate: yup.date(),
    about: yup.string(),
    avatar: yup.mixed('Add an image to your post')
});

export default schema;