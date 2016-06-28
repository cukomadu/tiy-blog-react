const React = require('react'),
	  ReactDOM = require('react-dom')	

const app = function(){

	var HomeView = React.createClass({
		render: function(){
			return (
					<div id="container">
						<Header />
						<MainContent />
					</div>
				   )
		}
	})


	var Header = React.createClass({
		render: function(){
			return (
				<div className="pageheader">
					<img id="headerImg" src="http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
          			<div id="logo">  
            			<img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
          			</div>
				</div>
				)
		}
	})

	var MainContent = React.createClass({
		render: function(){
			return (
				<div className="content">
					<LeftCol />
					<CenterCol />
					<RightCol />
				</div>
				)
		}
	})


	var LeftCol =  React.createClass({
		render: function(){
			return (
				<div className="leftContent">
              		<h2>THE IRON YARD | HOUSTON</h2>
              		<p> Happenings and updates from The Iron Yard in Houston, TX</p>
              		<h6>SEARCH</h6>
              		<input type="text" placeholder="Search Keywords"/>
				</div>
				)
		}
	})


	var CenterCol =  React.createClass({
		render: function(){
			return (
				<div className="centerContent">
					<h2>September 22 Starts a New Class of The Iron Yard Houston Students</h2>
          			<p class="authorInfo"><em> By Brain Dorton, Campus Director at <a href="https://www.theironyard.com/">The Iron Yard</a> Houston</em></p>
          			<div>
              			<img id="centerColImg" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
          			</div>
          			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda rem dolore, pariatur cupiditate, sunt libero placeat optio doloribus asperiores possimus omnis perferendis accusantium aperiam et quaerat harum facilis praesentium animi.</p>
              	</div>
				)
		}
	})


	var RightCol = React.createClass({
		render: function(){
			return (
				<div className="fixedContent">
					<div id="alignfixed">
						<p>Never miss a post!</p>  
		        		<div id="alignChildren">
		          			<img id="fixedColImg" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
		          			<span id="right">tiyhouston</span>
		        			<p id="under">The Iron Yard | Houston</p>
		        			<button id="follow">+  Follow</button>
		        		</div>
	        		</div>
				</div>
				)
		}
	})

	ReactDOM.render(<HomeView />, document.querySelector('.container'))
}

app() 


