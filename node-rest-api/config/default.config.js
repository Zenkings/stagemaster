const {Pool,Client} = require('pg')
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: "react_node",
  port:5432
})
pool.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
});

module.exports = pool;

