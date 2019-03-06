//向数据库中添加三者数据并查询
module.exports = {
    insertSupplier: function(req,res) {

    	//var param = req.query || req.params;
    	console.log(req.body.estate_id);
        var insertinfo = 'INSERT INTO house (estate_id,supplier_extrainfo) values(?,?)';
        connection.query(insertinfo, [req.body.estate_id, req.body.supplier_extrainfo], function(err, rows) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(rows);
            }
        });
    },

    insertSeller: function(req,res) {

    	//var param = req.query || req.params;
    	console.log(req.body.estate_id);
    	console.log(req.body.seller_extrainfo);
        var insertinfo1 = 'UPDATE house SET seller_extrainfo = ? WHERE estate_id = ?';
        connection.query(insertinfo1, [req.body.seller_extrainfo,+req.body.estate_id], function(err, rows) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(rows);
            }
        });
    },

    insertCustomer: function(req,res) {

    	//var param = req.query || req.params;
    	console.log(req.body.estate_id);
        var insertinfo2 = 'UPDATE house SET customer_extrainfo = ? WHERE estate_id = ?';
        connection.query(insertinfo2, [req.body.customer_extrainfo,+req.body.estate_id], function(err, rows) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(rows);
            }
        });
    },

    queryDetails: function(req,res) {

    	//var param = req.query || req.params;
    	console.log(req.body.estate_id);
    	//var arr[];
        var queryinfo3 = 'SELECT * FROM house WHERE estate_id = ?';
        connection.query(queryinfo3, req.body.estate_id, function(err, rows) {
            if (err) {
                console.log(err.message);
            } else {
            	//obj = rows[0];
            	console.log(rows[0].supplier_extrainfo);
            	console.log(rows[0].seller_extrainfo);
            	console.log(rows[0].customer_extrainfo);
            	//console.log(req.body.supplier_info);
            	/*for (var i =0; i <= rows.length; i++){
            		arr[i] = rows[i].supplier_extrainfo;
            	}*/
                console.log(rows);
            }
        });
    }
};
