const express = require("express");
const app = express();

const cors = require("cors");

const mysql = require("mysql");

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bluecart",
});

app.get("/products", (req, res) => {
  connection.query("SELECT * FROM laptopdata", (err, rows, fields) => {
    if (err) {
      console.log("failed to gain the data :" + err);
      res.end();
      return;
    }

    console.log("Fetched successfully");
    res.json(rows);
  });

  //res.end()
});

app.get("/smartphones", (req, res) => {
  connection.query("SELECT * FROM mobiledata", (err, rows, fields) => {
    if (err) {
      console.log("You got an error" + err);
      res.end();
    }

    console.log("data fetched sucessfully");
    res.json(rows);
  });
});

app.get("/smartphones/subs", (req, res) => {
  connection.query(
    "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA. COLUMNS WHERE TABLE_NAME = 'mobiledata'",
    (err, rows, fields) => {
      if (err) {
        console.log("You got an error" + err);
        res.end();
      }
      console.log("data fetched sucessfully");
      res.json(rows);
    }
  );
});

app.get("/carts/:id", (req, res) => {
  connection.query(`INSERT INTO carts (cartID) VALUES ('${req.params.id}')`);
  (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    console.log("data inserted successfully");
    res.json(rows);
  };
});

app.get("/smartphones/:id", (req, res) => {
  connection.query(
    `SELECT * FROM mobiledata WHERE id=${req.params.id}`,
    (err, rows, fields) => {
      if (err) {
        console.log("fetching error" + err);
        res.end();
      }
      console.log("Data fetched sucessfully");
      res.json(rows);
    }
  );
});

app.get("/Televis/:id", (req, res) => {
  connection.query(
    `SELECT * FROM tvdata WHERE id=${req.params.id}`,
    (err, rows, fields) => {
      if (err) {
        console.log("fetching error" + err);
        res.end();
      }
      console.log("Data fetched sucessfully");
      res.json(rows);
    }
  );
});

app.get("/fridge/:id", (req, res) => {
  connection.query(
    `SELECT * FROM fridgedata WHERE id=${req.params.id}`,
    (err, rows, fields) => {
      if (err) {
        console.log("fetching error" + err);
        res.end();
      }
      console.log("Data fetched sucessfully");
      res.json(rows);
    }
  );
});

app.get("/wmachine/:id", (req, res) => {
  connection.query(
    `SELECT * FROM washdata WHERE id=${req.params.id}`,
    (err, rows, fields) => {
      if (err) {
        console.log("fetching error" + err);
        res.end();
      }
      console.log("Data fetched sucessfully");
      res.json(rows);
    }
  );
});

app.get("/products/:id", (req, res) => {
  connection.query(
    `SELECT * FROM laptopdata WHERE id=${req.params.id}`,
    (err, rows, fields) => {
      if (err) {
        console.log("failed to gain the data :" + err);
        res.end();
        return;
      }

      console.log("Fetched successfully");
      res.json(rows);
    }
  );

  //res.end()
});

app.get("/result/mobiles/brands", (req, res) => {
  connection.query("SELECT Brand FROM mobiledata", (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    console.log("mobile brands fetched perfectly");
    res.json(rows);
  });
});

app.get("/result/laptops/brands", (req, res) => {
  connection.query("SELECT Brand FROM laptopdata", (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    console.log("laptop brands fetched perfectly");
    res.json(rows);
  });
});

app.get("/result/refrige/brands", (req, res) => {
  connection.query("SELECT Brand FROM fridgedata", (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json(rows);
  });
});

app.get("/result/fridges/brands", (req, res) => {
  connection.query("SELECT Brand FROM fridgedata", (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json(rows);
  });
});

app.get("/result/Washing/brands", (req, res) => {
  connection.query("SELECT Brand FROM washdata", (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json(rows);
  });
});

app.get("/result/Washing/brand/:Brand", (req, res) => {
  connection.query(
    `SELECT * FROM washdata WHERE Brand="${req.params.Brand}"`,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.json(rows);
    }
  );
});

app.get("/result/fridges/brand/:Brand", (req, res) => {
  connection.query(
    `SELECT * FROM fridgedata WHERE Brand="${req.params.Brand}"`,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.json(rows);
    }
  );
});

app.get("/result/mobiles/brand/:Brand", (req, res) => {
  connection.query(
    `SELECT * FROM mobiledata WHERE Brand="${req.params.Brand}"`,
    (err, rows, fields) => {
      if (err) {
        console.log("failed to gain the data :" + err);
        res.end();
        return;
      }

      console.log("Fetched successfully");
      res.json(rows);
    }
  );
});

app.get("/result/laptops/brand/:Brand", (req, res) => {
  connection.query(
    `SELECT * FROM laptopdata WHERE Brand="${req.params.Brand}"`,
    (err, rows, fields) => {
      if (err) {
        console.log("failed to gain the data :" + err);
        res.end();
        return;
      }

      console.log("Fetched successfully");
      res.json(rows);
    }
  );
});

app.get("/result/Refrige/brand/:Brand", (req, res) => {
  connection.query(
    `SELECT * FROM fridgedata WHERE Brand="${req.params.Brand}"`,
    (err, rows, fields) => {
      if (err) {
        console.log("failed to gain the data :" + err);
        res.end();
        return;
      }

      console.log("Fetched successfully");
      res.json(rows);
    }
  );
});
app.get("/result/Televis/brand/:Brand", (req, res) => {
  connection.query(
    `SELECT * FROM tvdata WHERE Brand="${req.params.Brand}"`,
    (err, rows, fields) => {
      if (err) {
        console.log("failed to gain the data :" + err);
        res.sendStatus(500);
        return;
      }

      console.log("Fetched successfully");
      res.json(rows);
    }
  );
});
app.get("/refrige", (req, res) => {
  connection.query("SELECT * FROM fridgedata", (err, rows, fields) => {
    if (err) {
      console.log("Getting Error" + err);
      res.sendStatus(500);
      res.end();
    }
    res.json(rows);
    console.log("fridge Data fetched sucessfully");
  });
});

app.get("/", (req, res) => {
  console.log("Responding to root route");
  res.send("Hello user this the encrypted backend of Bluecart");
});

app.get("/Televis", (req, res) => {
  connection.query("SELECT * FROM tvdata", (err, rows, fields) => {
    if (err) {
      console.log("got an error");
      res.end();
    }

    console.log("Data fetched sucessfully");
    res.json(rows);
  });
});

app.get("/washing", (req, res) => {
  connection.query("SELECT * FROM washdata", (err, rows, fields) => {
    if (err) {
      res.sendStatus(500);
    }
    res.json(rows);
  });
});

app.get("/result/Washing/relevance", (req, res) => {
  connection.query("SELECT * FROM washdata", (err, rows, fields) => {
    if (err) {
      res.sendStatus(500);
    }
    res.json(rows);
  });
});

app.get("/result/Washing/LowtoHigh", (req, res) => {
  connection.query(
    "SELECT * FROM washdata ORDER BY Price",
    (err, rows, fields) => {
      if (err) {
        res.sendStatus(500);
      }
      res.json(rows);
    }
  );
});

app.get("/result/Washing/HightoLow", (req, res) => {
  connection.query(
    "SELECT * FROM washdata ORDER BY Price DESC",
    (err, rows, fields) => {
      if (err) {
        res.sendStatus(500);
      }
      res.json(rows);
    }
  );
});

app.get("/result/laptops/relevance", (req, res) => {
  connection.query("SELECT * FROM laptopdata", (err, rows, fields) => {
    if (err) {
      console.log("Getting Error:(");
    }
    console.log("sorted data fetched perfectly");
    res.json(rows);
  });
});

//result/laptops/LowtoHight
app.get("/result/laptops/LowtoHigh", (req, res) => {
  connection.query(
    "SELECT * FROM laptopdata ORDER By Price",
    (err, rows, fields) => {
      if (err) {
        console.log("Getting Error:(");
      }
      console.log("sorted data fetched perfectly");
      res.json(rows);
    }
  );
});

//result/laptops/HighttoLow
app.get("/result/laptops/HightoLow", (req, res) => {
  connection.query(
    "SELECT * FROM laptopdata ORDER By Price DESC",
    (err, rows, fields) => {
      if (err) {
        console.log("Getting Error:(");
      }
      console.log("sorted data fetched perfectly");
      res.json(rows);
    }
  );
});

app.get("/result/mobiles/relevance", (req, res) => {
  connection.query("SELECT * FROM mobiledata", (err, rows, fields) => {
    if (err) {
      console.log("Getting Error :(");
    }
    console.log("Sorted mobiledata fetched perfectly");
    res.json(rows);
  });
});

app.get("/result/mobiles/LowtoHigh", (req, res) => {
  connection.query(
    "SELECT * FROM mobiledata ORDER BY Price",
    (err, rows, fields) => {
      if (err) {
        console.log("Getting Error :(");
      }
      console.log("Sorted mobiledata fetched perfectly");
      res.json(rows);
    }
  );
});

app.get("/result/mobiles/HightoLow", (req, res) => {
  connection.query(
    "SELECT * FROM mobiledata ORDER BY Price DESC",
    (err, rows, fields) => {
      if (err) {
        console.log("Getting Error :(");
        res.sendStatus(500);
      }
      console.log("Sorted mobiledata fetched perfectly");
      res.json(rows);
    }
  );
});

app.get("/result/fridges/relevance", (req, res) => {
  connection.query("SELECT * FROM fridgedata", (err, rows, fields) => {
    if (err) {
      console.log("Gets an error");
    }
    console.log("Sorted fridgedata fetched perfectly");
    res.json(rows);
  });
});

app.get("/result/fridges/LowtoHigh", (req, res) => {
  connection.query(
    "SELECT * FROM fridgedata ORDER BY Price",
    (err, rows, fields) => {
      if (err) {
        console.log("Gets an error");
      }
      console.log("Sorted fridgedata fetched perfectly");
      res.json(rows);
    }
  );
});

app.get("/result/fridges/HightoLow", (req, res) => {
  connection.query(
    "SELECT * FROM fridgedata ORDER BY Price DESC",
    (err, rows, fields) => {
      if (err) {
        console.log("Gets an error");
      }
      console.log("Sorted fridgedata fetched perfectly");
      res.json(rows);
    }
  );
});

app.get("/result/Televis/relevance", (req, res) => {
  connection.query("SELECT * FROM tvdata", (err, rows, fields) => {
    if (err) {
      console.log("Gets an error");
      res.sendStatus(500);
    }
    console.log("Sorted tvdata fetched perfectly");
    res.json(rows);
  });
});

app.get("/result/Televis/LowtoHigh", (req, res) => {
  connection.query(
    "SELECT * FROM tvdata ORDER BY Price",
    (err, rows, fields) => {
      if (err) {
        console.log("Gets an error");
        res.sendStatus(500);
      }
      console.log("Sorted tvdata fetched perfectly");
      res.json(rows);
    }
  );
});

app.get("/result/Televis/HightoLow", (req, res) => {
  connection.query(
    "SELECT * FROM tvdata ORDER BY Price DESC",
    (err, rows, fields) => {
      if (err) {
        console.log("Gets an error");
        res.sendStatus(500);
      }
      console.log("Sorted tvdata fetched perfectly");
      res.json(rows);
    }
  );
});

app.get("/result/Televis/brands", (req, res) => {
  connection.query("SELECT Brand FROM tvdata", (err, rows, fields) => {
    if (err) {
      console.log("Gets an error");
      res.sendStatus(500);
    }
    console.log("Sorted tvdata fetched perfectly");
    res.json(rows);
  });
});

const PORT = 3100 || process.env.PORT;

//localhost:3100
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
