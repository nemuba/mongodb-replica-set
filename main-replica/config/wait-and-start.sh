echo "Iniciando o host para o Replica Set"

/config/wait-for-it.sh mongo_host:30004 -- /config/mongo-setup.sh &

echo "Iniciando o MongoDB"

mongod --replSet rsmongo --bind_ip_all --port 30004
