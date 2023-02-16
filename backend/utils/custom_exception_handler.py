from rest_framework.views import exception_handler


def custom_exception_handler(exc, context):

    response = exception_handler(exc, context)

    exception_class = exc.__class__.__name__

    if exception_class == 'AuthenticationFailed':
        response.data = {
            'error': 'Invalid Email or Password'
        }
    
    if exception_class =='NotAuthenticated':
        response.data = {
            'error': 'Please login to access the resource'
        }
    if exception_class == 'InvalidToken':
        response.data = {
            'error': 'Your auth token expired. Please login again'
        }
    
    return response