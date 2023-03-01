// # Create a replica set
// # This script is executed by the mongo shell
// # It is executed on the primary node
// how to set the member to be primary ?

rs.initiate({
    _id: "rsmongo",
    members: [
        { _id: 0, host: "mongo_host:30004", priority: 0, votes: 1 },
        { _id: 1, host: "mongo_rs1:30001", priority: 3, votes: 0 },
        { _id: 2, host: "mongo_rs2:30002", priority: 0, votes: 1 },
        { _id: 3, host: "mongo_rs3:30003", priority: 0, votes: 1 },
    ],
});
