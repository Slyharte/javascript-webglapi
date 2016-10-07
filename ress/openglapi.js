class OpenGL {

	constructor() { let opengl = ''; }

	initScene(posX, posY, posZ, sceneName) {

		console.log('%c[Scene]' + ' %cScene init', 'color: red;', 'color: blue;');
		console.warn('%c[Scene]' + ' %cScene.name: ' + sceneName, 'color: red;', 'color: blue;');
		console.warn('%c[Scene]' + ' %cPos.x: ' + posX, 'color: red;', 'color: blue;');
		console.warn('%c[Scene]' + ' %cPos.y: ' + posX, 'color: red;', 'color: blue;');
		console.warn('%c[Scene]' + ' %cPos.z: ' + posX, 'color: red;', 'color: blue;');

		var map = {
			writeScene: function() {
				var fps = Math.round(Math.random() * 1000);
				console.warn('%c[Scene]' + ' %cFPS ' + fps, 'color: red;', 'color: blue;');
				document.write(`
					<style>
						#field{
							background-color: grey;
							height: ${posX}px;
						}
						#fps{
							background-color: black;
							color: white;
							width: 50px;
							font-family: sans-serif;
						}
						#data{
							text-align: center;
							content-align: center;
						}
						.round{
							background-color: red;
							text-align: center;
							border-radius: 100px;
							width: 100px;
							height: 100px;
						}
						.roundt{
							background-color: black;
							text-align: center;
							border-radius: 100px;
							width: 50px;
							height: 50px;
						}
						.centerR{
							padding: 100px;
							margin: 100px;
							right: 100px;
						}
						.menu{
							text-align: center;
							width: 150px;
							height: ${posX}px;
							font-family: sans-serif;
							position: absolute;
						}
					</style>
					<fieldset id="field">
						<div id="fps"><p id="fpsText">${fps}fps</p></div>
						<div id="data">
							<div class="centerR"><div class="round"><div class="roundt"></div><div class="roundt"></div></div></div>
						</div>
						<div class="menu" id="menu"></div>
					</fieldset>
				`);
			}
		};

		map.writeScene();

	}

	initCamera(posX, posY, posZ, cameraName) {

		console.log('');
		console.log('%c[Camera]' + ' %cCamera init', 'color: red;', 'color: blue;');
		console.warn('%c[Camera]' + ' %cCamera.name: ' + cameraName, 'color: red;', 'color: blue;');
		console.warn('%c[Camera]' + ' %cPos.x: ' + posX, 'color: red;', 'color: blue;');
		console.warn('%c[Camera]' + ' %cPos.y: ' + posY, 'color: red;', 'color: blue;');
		console.warn('%c[Camera]' + ' %cPos.z: ' + posZ, 'color: red;', 'color: blue;');

	}

	render(data) {

		document.getElementById('data').innerHTML = data;
		console.log('');

		console.warn('%c[Render]' + `%c
data{
	${data}
}
		`, 'color: red;', 'color: blue;');

	}

	setPos(obj, posX, posY, posZ) {

		console.warn('%c[Pos]' + ' %cPos.x: ' + posX, 'color: red;', 'color: blue;');
		console.warn('%c[Pos]' + ' %cPos.y: ' + posY, 'color: red;', 'color: blue;');
		console.warn('%c[Pos]' + ' %cPos.z: ' + posZ, 'color: red;', 'color: blue;');

		obj = {
			pos: [posX, posY, posZ]
		};

		this.obj = obj;
		this.obj.pos[posX] = posX;
		this.obj.pos[posY] = posY;
		this.obj.pos[posY] = posY;

		var letPos = function(loc) {
			this.loc = loc;
			return this.loc;
		}

		letPos(this.obj.pos[posX], this.obj.pos[posY], this.obj.pos[posY]);

	}

	setMenu(menuName, opt1, opt2, opt3, opt4) {

		var menu = document.getElementById('menu');
		menu.innerHTML = `
<h1>${menuName}</h1><p></p>
${opt1}<p></p>
${opt2}<p></p>
${opt3}<p></p>
${opt4}<p></p>
		`;

	}

}