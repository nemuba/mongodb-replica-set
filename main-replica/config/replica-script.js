// # Create a replica set
// # This script is executed by the mongo shell
// # It is executed on the primary node
// how to set the member to be primary ?

rs.initiate({
  _id: "rsmongo",
  members: [
    // definir o membro 0 como primário
    { _id: 0, host: "mongo_host:27017", priority: 1, votes: 1 },
    // definir os membros 1, 2 e 3 como secundários e não eleitores
    { _id: 1, host: "mongo_rs1:30001" },
    { _id: 2, host: "mongo_rs2:30002" },
    { _id: 3, host: "mongo_rs3:30003" },
  ],
});
