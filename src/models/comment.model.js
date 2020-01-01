import * as yup from 'yup';

let schema = yup.object().shape({
    content: yup.string().min(2).max(255).required(),
});

export default schema;