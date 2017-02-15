var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var about =
  {
      'about-pp':
      {
          title: "about app",
    heading:"About Us",
     mobile:"8892726625",
     content:
     `<p>soldevanhalli<br>
     oppsite to axes bank atm <br>
     chikbanabara,bangalor-560090<br>
     </p>
     `
      },
      'about-p':
      {
    title: "about",
    heading:"About application",
     mobile:"8892726625",
     content:
     `<p>soldevanhalli<br>
     oppsite to axes bank atm <br>
     chikbanabara,bangalor-560090<br>
     </p>
     `
      }
    };
function templet(data)
{
	var title=data.title;
	var heading=data.heading;
	var mobile=data.mobile;
	var content=data.content;
  var htmltem=
  `
  <html>
   <head>
   <link href="/ui/style.css" rel="stylesheet" />
   <title> ${title}
	</title>
	</head>
	<body>
	<div class="model">
	${heading}
	${mobile}
	${content}
	</div>
	</body>
	</html>
`;
return htmltem;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:aboutName', function (req, res) {
    var aboutName=req.params.aboutName;
  res.send(templet(about[aboutName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter=0;

app.get('/c', function (req, res)
{
   counter=counter+1;
   
   res.send(counter.toString());
   
   
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
