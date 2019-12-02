import * as yup from 'yup';

let schema = yup.object().shape({
    title: yup.string().min(2).max(255).required('Write something about your post'),
    image: yup.mixed().required('Add an image to your post'),
    tags: yup.array()
});

export default schema;