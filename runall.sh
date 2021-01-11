gnome-terminal --tab -e "bash runfront.sh"
source back/backend/bin/activate
python3 back/factory/manage.py runserver