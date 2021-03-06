/*

This homework exercise will walk you through the steps to build a table of contents for the article in index.html.

The required part of this assignment is to generate a static table of contents. The bonus, if you have time, is to make it dynamic, so that each item in the table of contents links to the corresponding paragraph of text in the article body.

Before you get started, you should familiarize yourself with the HTML document that you'll be working with

*/


/*

Get the DOM nodes for the table of contents and the article body and save them both as variables

*/
var tableOfContents ;
var articleBody = document.createElement('article-body')
var tableOfContents = document.createElement('table-of-contents')


/*

get an array of every heading in the document and store them in a variable called documentHeadings

*/

var h1 = document.createElement('h1')
var n2 = document.createElement('h2')

var documentHeadings = [h1,h2]

/*

To generate our table of contents we need to do a couple of things:

1. We need to loop through our documentHeadings array
2. Inside our loop, we need to clone the current element from the documentHeadings array and append it to the table of contents element

*/

var i
for(i = 0; i <= documentHeadings.length; i++ ){
var tableOfContents =  document.createElement('h1')
var newTableOfContents = documentHeadings.cloneNode(true);
document.body.appendChild('h1')

do.createTextNode('Lorem ipsum dolor sit amet')
node.appendChild(newTableOfContents)

}

/*

Bonus, make each item of the ToC a link to that heading on the page.

*/



/*

1. Modify each heading on the page so that it has a unique id (or figure out a way to make this part of your loop in part 2! Bonus bonus!)

*/



/*

While looping through each item in your documentHeadings array:
1. create an <a> element
2. give it an href attribute that is the same as the ID of the current documentHeading
3. then append it to the table of contents element

hint: you want what you insert to look something like this:

<a href="#firstHeading"><h1>Lorem ipsum dolor sit amet</h1></a>

*/


var j
for(j = 0; j <= documentHeadings.length; j++ ){
links = document.createElement('a')
document.body.appendChild(newTableOfContents)
a.setAttribute("href", "#firstHeading");

}
