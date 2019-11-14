FOR /F "tokens=5 delims= " %%P IN ('netstat -a -n -o ^| findstr :9999.*LISTENING') DO TaskKill.exe /PID %%P /F
FOR /F "tokens=5 delims= " %%P IN ('netstat -a -n -o ^| findstr :chrome.*') DO TaskKill.exe /PID %%P /F
