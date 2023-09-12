import { Alert, Spinner } from 'react-bootstrap';

const Alerts = ({ status, context }) => {
    const alertDetails = {
        success: {
            variant: 'success',
            heading: 'Success!',
            message: {
                'register': 'You have been successfully registered!',
                'login': 'You have been successfully logged in!',
                'order': 'Your order has been sent to us!',
            }[context] || 'Operation Successful',
            className: 'my-5'
        },
        serverError: {
            variant: 'danger',
            heading: 'Something went wrong!',
            message: 'Unexpected error please try again',
        },
        clientError: {
            variant: 'danger',
            heading: 'Not enough data',
            message: 'You have to fill all the fields',
        },
        loginError: {
            variant: 'warning',
            heading: 'Email already in use',
            message: 'You have to use another login',
        },
    };

    if (status === 'loading') {
        return (
            <Spinner animation="border" role="status" className="block mx-auto">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    const details = alertDetails[status];
    if (!details) return null;

    return (
        <Alert variant={details.variant} className={details.className || ''}>
            <Alert.Heading>{details.heading}</Alert.Heading>
            <p>{details.message}</p>
        </Alert>
    );
};

export default Alerts;
