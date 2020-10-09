For the task One, I tried to intall Centos on VMware fusion, but it was too slow. Therefore I installed Centos 7 
as the second operating system on my PC.
After that, I installed Apache server, and used commands shows below to start it:

install httpd: 
yum -y install httpd

start httpd: 
systemctl start httpd.service

check the status:
systemctl status httpd.service

I create a file "index.html" in the directory /var/www/html, which is also showed in Folder "Task One".
Finally, I can go to the http://localhost:80 to see the hellow world website which is hosted on the apache server.


