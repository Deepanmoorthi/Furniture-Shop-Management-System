const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "deepan@12",
    database: "shopapp"
}); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//LOGIN AND REGISTER

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM customer";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/login", (req, res) => {
    const sqlGet = "SELECT * FROM customer email, password";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.post("/api/post/register", (req, res) => {
    const {name, email, address, pincode, phone, password, confpassword} = req.body;
    
    const sqlInsert = "INSERT INTO customer (name, email, address, pincode, phone, password, confpassword) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [name, email, address, pincode, phone, password, confpassword], (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

// COMMON FEEDBACK

app.post("/api/post/feedback", (req, res) => {
    const {name, email, message, rating} = req.body;
    
    const sqlInsert = "INSERT INTO feedback (name, email, message, rating) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [name, email, message, rating], (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

// BOOKING

app.post("/api/post/book", (req, res) => {
    const {email, contact, message, pdtname, size, color, quantity, date} = req.body;
    
    const sqlInsert = "INSERT INTO booking (email, contact, message, pdtname, size, color, quantity, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [email, contact, message, pdtname, size, color, quantity, date], (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

// SERVICE FEEDBACK

app.post("/api/post/service", (req, res) => {
    const {sname, contact, message, worktype} = req.body;
    
    const sqlInsert = "INSERT INTO service (sname, contact, message, worktype) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [sname, contact, message, worktype], (error, result) => {
        if(error){
            console.log(error);
        }
    })
});


//Admin data

// CUSTOMER DATA

app.get("/api/get/auser", (req, res) => {
    const sqlGet = "SELECT * FROM customer";
    db.query(sqlGet, (error, result) => {
        res.send(result);
        
    });
});

app.get("/api/get/auser/:id", (req, res) => {
    const {id} =  req.params;
    const sqlGet = "SELECT * FROM customer WHERE ctid = ?";
    db.query(sqlGet, id, (error, result) => {
        res.send(result[0]);
        
    });
});

app.delete("/api/cremove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM customer WHERE ctid = ?";
    db.query(sqlRemove, id, (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

app.post("/api/post/auser", (req, res) => {
    const {name, email, address, pincode, phone, password, confpassword} = req.body;
    
    const sqlInsert = "INSERT INTO customer (name, email, address, pincode, phone, password, confpassword) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [name, email, address, pincode, phone, password, confpassword], (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

app.put("/api/cupdate/:id", (req, res) => {
    const {id} = req.params;
    const {name, email, address, pincode, phone, password, confpassword} = req.body;
    const sqlUpdate = "UPDATE customer SET name = ?, email = ?, address = ?, pincode = ?, phone = ?, password = ?, confpassword = ? WHERE ctid = ?";
    db.query(sqlUpdate, [name, email, address, pincode, phone, password, confpassword, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});


// SUPPLIER DATA

app.get("/api/get/supplier", (req, res) => {
    
    const sqlGet = "SELECT * FROM supplier";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/supplier/:id", (req, res) => {
    const{id}=req.params;
    const sqlGet = "SELECT * FROM supplier where supplierid=?";
    db.query(sqlGet, id ,(error, result) => {
        res.send(result[0]);
    });
});

app.delete("/api/sremove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM supplier WHERE supplierid = ?";
    db.query(sqlRemove, id, (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

app.post("/api/post/supplier", (req, res) => {
    const {name, contact, email, stprice} = req.body;
    
    const sqlInsert = "INSERT INTO supplier (name, contact, email, stprice) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [name, contact, email, stprice], (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

app.put("/api/supdate/:id", (req, res) => {
    const {id} = req.params;
    const {name, email, contact} = req.body;
    const sqlUpdate = "UPDATE supplier SET name = ?, email = ?, contact = ? WHERE supplierid = ?";
    db.query(sqlUpdate, [name, email, contact, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});



// SERVICE DATA

app.get("/get/service", (req, res) => {
    
    const sqlGet = "SELECT * FROM service";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


app.get("/get/service/:id", (req, res) => {
    const{id}=req.params;
    const sqlGet = "SELECT * FROM service WHERE serid=?";
    db.query(sqlGet, id ,(error, result) => {
        res.send(result[0]);
    });
});

app.delete("serremove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM service WHERE serid = ?";
    db.query(sqlRemove, id, (error, result) => {
        if(error){
            console.log(error);
        }
    })
});



// FEEDBACK DATA

app.get("/get/feedback", (req, res) => {
    
    const sqlGet = "SELECT * FROM feedback";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


app.get("/get/feedback/:id", (req, res) => {
    const{id}=req.params;
    const sqlGet = "SELECT * FROM feedback WHERE feedid=?";
    db.query(sqlGet, id ,(error, result) => {
        res.send(result[0]);
    });
});

app.delete("/feedremove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM feedback WHERE feedid = ?";
    db.query(sqlRemove, id, (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

// BOOKING DATA

app.get("/get/booking", (req, res) => {
    
    const sqlGet = "SELECT * FROM booking";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


app.get("/get/booking/:id", (req, res) => {
    const{id}=req.params;
    const sqlGet = "SELECT * FROM booking WHERE bookid=?";
    db.query(sqlGet, id ,(error, result) => {
        res.send(result[0]);
    });
});

app.delete("/bookremove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM booking WHERE bookid = ?";
    db.query(sqlRemove, id, (error, result) => {
        if(error){
            console.log(error);
        }
    })
});



// PRODUCT DATA


app.get("/api/get/adproduct", (req, res) => {
    const sqlGet = "SELECT shopapp.product.*, shopapp.supplier.email FROM shopapp.product INNER JOIN shopapp.supplier ON shopapp.product.supplierid = shopapp.supplier.supplierid";
    db.query(sqlGet, (error, result) => {
        res.send(result);
        
    });
});

app.get("/api/get/adproduct/:id", (req, res) => {
    const {id} =  req.params;
    const sqlGet = "SELECT * FROM product WHERE productid = ?";
    db.query(sqlGet, id, (error, result) => {
        res.send(result[0]);
        
    });
});

app.delete("/api/adproductremove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM product WHERE productid = ?";
    db.query(sqlRemove, id, (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

app.post("/api/post/adproduct", (req, res) => {
    const {supplierid, productname, category, quantity, description, picture, date, cprice, sprice} = req.body;
    
    const sqlInsert = "INSERT INTO product (supplierid,productname, category, quantity, description, pdtimage, date, cprice, sprice) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [parseInt(supplierid),productname, category, quantity, description, picture.images, date, cprice, sprice], (error, result) => {
        if(error){
            console.log(error);
        }
    })
});


app.put("/api/adproductupdate/:id", (req, res) => {
    const {id} = req.params;
    const {supplierid, productname, category, quantity, description, picture, date, cprice, sprice} = req.body;
    const sqlUpdate = "UPDATE shopapp.product SET supplierid = ?, productname= ?, category= ?, quantity= ?, description= ?, pdtimage= ?, date= ?, cprice= ?, sprice = ? WHERE productid = ?";
    db.query(sqlUpdate, [parseInt(supplierid), productname, category, quantity, description, picture.images, date, cprice, sprice, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});



// ORDER DATA



app.get("/api/get/order", (req, res) => {
    const sqlGet = "SELECT * FROM shopapp.order";
    db.query(sqlGet, (error, result) => {
        if(error)
            console.log(error)
        res.send(result);
    });
});

app.get("/api/get/order/:id", (req, res) => {
    const {id} =  req.params;
    const sqlGet = "SELECT * FROM shopapp.order WHERE orderid = ?";
    db.query(sqlGet, id, (error, result) => {
        res.send(result[0]);
        
    });
});

app.delete("/api/orderremove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM shopapp.order WHERE orderid = ?";
    db.query(sqlRemove, id, (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

app.post("/api/post/order", (req, res) => {
    const {email, pdtname, category, quantity, picture, date, sprice} = req.body;
    
    const sqlInsert = "INSERT INTO shopapp.order (email, pdtname, category, quantity, pdtimage, date, sprice) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [email, pdtname, category, quantity, picture.images, date, sprice], (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

app.put("/api/orderupdate/:id", (req, res) => {
    const {id} = req.params;
    const {email,pdtname, category, quantity, picture, date, sprice} = req.body;
    const sqlUpdate = "UPDATE shopapp.order SET email= ?, pdtname= ?, category= ?, quantity= ?, pdtimage= ?, date= ?, sprice = ? WHERE orderid = ?";
    db.query(sqlUpdate, [email, pdtname, category, quantity, picture.images, date, sprice, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});


//------------------------------------REPORTS----------------------------------//


app.get("/purchase/report/:from/:to",(req,res) =>{
    const{from,to} = req.params;
    // console.log(from+" "+to);
    const sqlGet = "SELECT shopapp.product.productid, shopapp.supplier.email , shopapp.product.productname, shopapp.product.category, shopapp.product.description, shopapp.product.cprice, shopapp.product.date FROM shopapp.product INNER JOIN shopapp.supplier ON shopapp.product.supplierid = shopapp.supplier.supplierid WHERE shopapp.product.date BETWEEN ? AND ?";
    db.query(sqlGet,[from,to],(err,result)=>{
        if(err)
           console.log(err);
        
    res.send(result)
    })
})


app.get("/order/report/:from/:to",(req,res) =>{
    const{from,to} = req.params;
    // console.log(from+" "+to);
    const sqlGet = "SELECT * FROM shopapp.order WHERE date BETWEEN ? AND ?";
    db.query(sqlGet,[from,to],(err,result)=>{
        if(err)
           console.log(err);
        
    res.send(result)
    })
})


app.get("/booking/report/:from/:to",(req,res) =>{
    const{from,to} = req.params;
    // console.log(from+" "+to);
    const sqlGet = "SELECT * FROM shopapp.booking WHERE shopapp.booking.date BETWEEN ? AND ?";
    db.query(sqlGet,[from,to],(err,result)=>{
        if(err)
           console.log(err);
        
    res.send(result)
    })
})


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
