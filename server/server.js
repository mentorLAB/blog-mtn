const jsonServer=require('json-server')
    , server=jsonServer.create()
    , router=jsonServer.router('./db.json')
    , newBlog=require('./newBlog.js')

