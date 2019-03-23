Install yarn/ npm
	No need to use gulp since we will be using webpack
Install React and React-DOM to allow us to use JSX
Install live-server to allow us to run a local server
Install Webpack (3.1.0)
Install babel-core (6.25.0) and babel-loader(7.1.1) <- Need more reading into this.
	Babel allows you to write ES6 code which it then translate it to ES5 which older browsers might understand

Little understanding of the below
----------------------------------
We tell webpack to run babel everytime it sees a javascript file we write
We need to teach webpack how to run babel <- We do this by using the babel loader. This allows us to run babel under specified conditions
	In order to set these conditions, we write some rules in 'webpack.config.js'
		Whenever you see a file that ends in '.js' and it is not in the 'node_modules' folder, go ahead and run it through babel

Set up a webpack.config.js file to look at the entry and output files for compiling
Set up webpack modules (rules for the loader)
Set up a .babelrc file to create the presets for babel-core


Setting up sourcemaps - making debugging a lot faster
------------------------------------
This will help us locate errors to the origin location when an error triggers
We set this up by addint dev tools to 'webpack.config.js' as follows:

devtool: 'cheap-module-eval-source-map'

Webpack WebServer (Dev)
------------------------------------
*webpack.js.org*

Install DevServer: yarn add webpack-dev-server
Properties: contentbase <- Where can we find our public files?

    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
	
After this, we will need to run a script to run devserver:

    "dev-server": "webpack-dev-server"
	
Babel is no longer necessary at this point
LiveServer is no longer necessary at this point

Class transform => We want a cleaner code without the hassle of writing contructors and having to manage context of "this" so we download "babel-plugin-transform-class-properties"


Creating Modals (Use of built-in children prop)
---------------------------------------
React-modal



Redux - Create real reusable component
---------------------------------------
A global container that holds states ( A state container - CRUD(object))
Example - 
    Redux Store
    {
        expenses:[{
            _id: 'abc'.
            description: 'rent',
            amount: 109500
        }]
    }