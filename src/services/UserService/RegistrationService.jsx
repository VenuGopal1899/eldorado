import axios from 'axios';

export const RegistrationService = (props) => {
    axios.post('http://localhost:8082/admin/product', props.data,
        {
            headers: {
                "Content-Type" : "application/json"
            }
        }).then((response => this.setState({ articleId: response.data.id })));
}