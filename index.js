var express = require('express');
//配置文件
var globalConfig = require('./config')
var loader = require('./loader');


var app = new express();


//默认找到index.html
app.use(express.static('./page/'));

app.post('/editEveryDay',loader.get('/editEveryDay'))
app.get('/queryEveryDay',loader.get('/queryEveryDay'))
app.get("/queryBlogByPage", loader.get("/queryBlogByPage"));
app.post('/editBlog',loader.get('/editBlog'))
app.get("/queryBlogCount", loader.get("/queryBlogCount"));

//查找文章id
app.get("/queryBlogById", loader.get("/queryBlogById"));
//发送评论
app.get("/addComment", loader.get("/addComment"));
//验证码
app.get("/queryRandomCode", loader.get("/queryRandomCode"));
//获取评论
app.get("/queryCommentsByBlogId", loader.get("/queryCommentsByBlogId"));
app.get("/queryCommentsCountByBlogId", loader.get("/queryCommentsCountByBlogId"));

//地图
app.get("/queryAllBlog", loader.get("/queryAllBlog"));
//随机标签云
app.get("/queryRandomTags", loader.get("/queryRandomTags"));
//选热门文章
app.get("/queryHotBlog", loader.get("/queryHotBlog"));
//选最新评论 base.js
app.get("/queryNewComments", loader.get("/queryNewComments"));

app.get("/queryByTag", loader.get("/queryByTag"));
app.get("/queryByTagCount", loader.get("/queryByTagCount"));

app.listen(globalConfig.port,function(){
    console.log('服务启动')
})