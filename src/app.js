import express from 'express'
import nunjucks from 'nunjucks' 
import config from './config' 
import {join} from 'path' 
import indexRouter from './controllers/index'
import * as accountRouter from './controllers/account'

const app = express()

// 静态资源
app.use( '/static',express.static( join( __dirname,'../static' ) ) )
app.use( '/node_modules',express.static( join( __dirname,'../node_modules' ) ) )

nunjucks.configure( config.viewPath , {
    autoescape: true,
    express: app,
    watch: true,
    noCache:false
})

app.use( indexRouter )
app.use( '/account',accountRouter )

app.listen( config.port,config.host,() => {
	console.log( `Server is running at ${ config.port }` )
	console.log( `Please visit http://${ config.host }:${ config.port }` )
} )
