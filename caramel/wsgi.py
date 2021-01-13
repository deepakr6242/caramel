"""
WSGI config for caramel project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'caramel.settings')

application = get_wsgi_application()


# mvc/t

# modwsgi uwsgi
# apache server   .ini
# server 
# applications 
# 8096
# 8097
# 8098
# 8095

# http://www.abc.com/app1   8080   8096
#                    /app2  8080  8097
# https://www.abc.com 443
