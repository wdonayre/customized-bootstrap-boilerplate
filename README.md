Customized Bootstrap Boilerplate
================================
Customized Bootstrap Boilerplate aims to help you get started in creating your Template on top of Bootstrap Framework using using less as your CSS preprocessor.

File Structure
--------------

[your main project folder]
	- [bower_components] //all the files inside this folder will be generated through bower.

	|	- [bootstrap]

	- [dist]

	|	- your-compiled-style.css

	|	- your-compiled-style-theme.css

	- [less]

		- [mixins]

			- your-custom-mixins-core.less

			- another-custom-mixins-core.less

		- your-main-style.less

		- your-main-style-theme.less

		- variables.less

		- mixins.less

	- [examples] // example implementation of your customized bootstrap based template

	
	
Getting Started
---------------
You need the following tools in setting up your development environment:

[Node.js](http://nodejs.org/)

[Grunt - The Javascript Task Runner](http://gruntjs.com/)

[Bower - A package manager for the web](http://bower.io/)


Usage
-----

 $ git clone git@github.com:wdonayre/customized-bootstrap-boilerplate.git mythemeproject

 $ cd mythemeproject

 $ npm install

 $ bower install

 
 **Development**
 $ grunt dev
 
 **Production**
 $ grunt prod
 
Generated Files
---------------
You can find yours css and javascript files under "develop" or "production" directory after running "grunt".

About Me
--------

Contact me for more info me@wdonayre.com
 
 





	



		
		
		