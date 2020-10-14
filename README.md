# Interview test project -- Michael

## About

There are total 3 tasks in this test, the file structure is shown below.

├── package-lock.json<br />
├── task2and3<br />
│   ├── backend<br />
│   └── frontend<br />
├── task_1_1<br />
│   ├── ReadMe.txt<br />
│   └── index.html<br />
└── task_1_2<br />
├── db.sqlite3<br />
├── helloworld<br />
├── manage.py<br />
└── src<br />

## Task One

### Task description

- Create an instance with the CentOS operating system
- Create a “HelloWorld” webpage hosted on the Apache(httpd) server
- Createa Django(https://www.djangoproject.com/) project with a “HelloWorld” page

### Prerequisites

- CentOS 8 (from https://www.centos.org/)
- VMware WorkStation(from https://www.vmware.com/products/workstation-pro.html)
- Apache Server
- Python 3
- Django

### Installing

- Install CentOS 8 on VMware WorkStation
- Install httpd: yum -y install httpd
- Install python3: sudo dnf install python3 -y
- Install Django: python3 -m pip3 install Django

### Setup Task 1-1

- Create a file "index.html" under the directory /var/www/html
- Go to the http://localhost:80 to see the hello world website

### Setup Task 1-2

- Enter into directory '/interviewproject-michaelg/task_1_2': python3 manage.py runserver
- Open browser with link http://127.0.0.1:8000/helloworld/

## Task 2

### Task description

- Develop the backend with Django and Django RestfulFramework
- Develop a web in React.js as the FrontEnd

### Prerequisites

- CentOS 8 (from https://www.centos.org/)
- VMware WorkStation(from https://www.vmware.com/products/workstation-pro.html)
- Python 3
- Django
- Node
- React
- MySQL Database

### Frontend

Enter into directory './task2and3/frontend/app_frontend'

- Install dependencies: npm install
- Get started: npm start

### Backend

Enter into directory

### Installing

- Install django rest framework: pip3 install djangorestframework
- Install django-cors-headers: python3 -m pip install django-cors-headers
- Install mysql client: pip3 install mysqlclient

### Setup Backend

Enter into directory './task2and3/backend/src'

- Modify your MySQL database configuration in file under the directory './app_backend/settings.py'
- python3 manage.py runserver

## Task 3

## Backend Testing

Get Started: python3 manege.py test
