# MongoDB Server with replica set
Docker for create an replica set on mopngodb

## Config Default

* Replica Set: rsmongo
 - mongo_rs1:30001
 - mongo_rs2:30002
 - mongo_rs3:30003,
 - mongo_host:30004

## Usage

```bash
docker compose build .
docker compose up -d
```

## Conect

Using MongoDB Compass add this URI connection string:

```bash
mongodb://mongo_rs1:30001,mongo_rs2:30002,mongo_rs3:30003,mongo_host:30004/?replicaSet=rsmongo
```
