# Map of Janusz Korczak places


This map is built with GeoDjango,Docker,NGINX,React and Leaflet.

## Run the Application

```
git clone https://github.com/KalinaJ45/Janusz-Korczak-places-map
cd korczak_places_web_map
 - run the command: make build
 - run the migrate command: make migrate
 - create superuser: make superuser
 - then run the command: make shell
to load Janusz Korczak places data run these commands in the shell
>>> from places import load
>>> load.run()
>>> exit()

navigate to localhost:8080
```


