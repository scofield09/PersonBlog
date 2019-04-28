var dbutil = require('./DBUtil');

function insertBlog(title,content,tags,views,ctime,utime,success){
    var insertSql = 'insert into blog  (`title`,`content`,`tags`,`views`,`ctime`,`utime`) value (?,?,?,?,?,?)';
    var params = [title,content,tags,views,ctime,utime];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql,params,function(error,result){
        if(error==null){
            success(result)
        }else{
            console.log(error)
        }
    });
    connection.end()
};


function queryBlogByPage(page, pageSize, success) {
    var insertSql = "select * from blog order by id desc limit ?, ?;";
    var params = [page * pageSize, pageSize];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


function queryBlogCount(success) {
    var querySql = "select count(1) as count from blog;";
    var params = [];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


//选文章id
function queryBlogById(id, success) {
    var querySql = "select * from blog where id = ?;";
    var params = [id];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


//地图选全部文章
function queryAllBlog(success) {
    var querySql = "select * from blog order by id desc;";
    var params = [];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

//加浏览次数
function addViews(id, success) {
    var querySql = "update blog set views = views + 1 where id = ?;";
    var params = [id];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function queryEveryDay(success){
    var querySql = 'select * from every_day order by id desc limit 1;';
    var params = [];
    
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql,params,function(error,result){
        if(error==null){
            success(result)
        }else{
            console.log(error)
        }
    });
    connection.end()
};

//选热门文章
function queryHotBlog(size, success) {
    var querySql = "select * from blog order by views desc limit ?;";
    var params = [size];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


module.exports.insertBlog = insertBlog;
module.exports.queryBlogByPage = queryBlogByPage;
module.exports.queryBlogCount = queryBlogCount;
module.exports.queryBlogById = queryBlogById;
module.exports.queryAllBlog = queryAllBlog;
module.exports.addViews = addViews;
module.exports.queryHotBlog = queryHotBlog;