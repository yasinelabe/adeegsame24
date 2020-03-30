// alert('yre')
// function showItems(item) {
// 	// alert('hi')
// 	// event.preventDefault();

// 	for (var i = 0; i < item.childNodes.length; i++) {
// 		if (item.childNodes[i].className === 'content_categories items ') {
// 			const theone = item.childNodes[i];
// 			theone.style.display = 'block';
// 			item.addEventListener('click', () => {
// 				hideItems(item);
// 			});
// 		} else if (item.childNodes[i].className === 'categories_items') {
// 			item.childNodes.forEach((th) => {
// 				if (th.className === 'leading') {
// 					th.childNodes.forEach((t) => {
// 						if (t.className === 'fa fa-angle-right rightangle') {
// 							t.removeAttribute('class');
// 							t.setAttribute('class', 'fa fa-angle-down rightangle');
// 						}
// 					});
// 				}
// 			});
// 		}
// 	}
// 	// document.getElementById('categories_title').setAttribute('onclick', 'hideItems(event)');
// }

// function hideItems(item) {
// 	for (var i = 0; i < item.childNodes.length; i++) {
// 		item.style.display = 'none';
// 		item.addEventListener('click', () => {
// 			showItems(item);
// 		});

// 		if (item.childNodes[i].className === 'categories_items') {
// 			let items = item.childNodes;
// 			items.forEach((th) => {
// 				if (th.className === 'leading') {
// 					th.childNodes.forEach((t) => {
// 						if (t.className === 'fa fa-angle-down rightangle') {
// 							t.removeAttribute('class');
// 							t.setAttribute('class', 'fa fa-angle-right rightangle');
// 						}
// 					});
// 				}
// 			});
// 		}
// 	}
// 	document.getElementById('rightangle').setAttribute('class', 'fa fa-angle-right');

// 	document.querySelector('.items').style.display = 'none';
// 	// document.querySelector('.items').style.overflow = 'hidden';
// 	// document.getElementById('categories_title').setAttribute('onclick', 'showItems(event)');
// 	document.getElementById('categories_title').addEventListener('click', () => {
// 		showItems();
// 	});
// }

// let itemTitle = document.querySelectorAll('.categories_title');

// if (itemTitle != null) {
// 	itemTitle.forEach((item) => {
// 		console.log(item);
// 		// console.log('<br>')
// 		item.addEventListener('click', () => showItems(item));
// 	});
// }

function showMenu() {
	document.getElementById('sidenav').style.zIndex = '999';
	setTimeout(() => {
		document.getElementById('shadow').style.display = 'block';
		document.querySelector('.hero_image').style.width = '250px';
		document.getElementById('sidenav').style.opacity = '1';
		document.querySelector('.fa-ul').style.width = '250px';
		document.getElementById('sidenav').style.width = '250px';
	}, 300);
}

function hideMenu() {
	document.getElementById('sidenav').style.zIndex = '-1';
	document.getElementById('sidenav').style.opacity = '0';
	document.getElementById('sidenav').style.width = '0px';
	document.querySelector('.fa-ul').style.width = '0px';
	document.getElementById('shadow').style.display = 'none';
	document.querySelector('.hero_image').style.width = '0px';
	document.getElementById('sidenav').style.zIndex = '-1';

	// document.querySelector('.bar').setAttribute('onclick','showMenu(event)');
}

let bar = document.getElementById('bar');
if (bar) {
	bar.addEventListener('click', () => showMenu());
}

let shadow = document.getElementById('shadow');
if (shadow) {
	shadow.addEventListener('click', () => hideMenu());
}

function hideSearch() {
	document.getElementById('searchbtn').style.display = 'block';
	document.getElementById('searchinput').style.width = '0%';
	document.getElementById('searchinput').style.padding = '0';
	document.querySelector('#sitename').style.display = 'block';
	document.querySelector('.left-head').style.width = '45%';
	document.querySelector('.center-head').style.width = '20%';

	document.querySelector('.return').style.display = 'none';
	document.querySelector('.bar').style.display = 'block';
}

function showSearch() {
	document.getElementById('searchbtn').style.display = 'none';
	document.getElementById('searchinput').style.width = '100%';
	document.getElementById('searchinput').style.padding = '10px';
	document.querySelector('#sitename').style.display = 'none';
	document.querySelector('.left-head').style.width = '8%';
	document.querySelector('.center-head').style.width = '57%';

	document.querySelector('.bar').style.display = 'none';
	document.querySelector('.return').style.display = 'block';
}
let searchbtn = document.getElementById('searchbtn');
if (searchbtn) {
	searchbtn.addEventListener('click', () => showSearch());
}

let returner = document.querySelector('.return');

if (returner) {
	returner.addEventListener('click', () => hideSearch());
}

// function categoriesSlider(){
// 	images = ['baradhoo.jpeg','barbarooni.jpg','basal.jpg','qaji.jpg','xabuub.jpg'];

// 	document.querySelector('.category_image').style.background = `url(./images/${images[0]}) no-repeat`;
// 	document.querySelector('.category_image').style.backgroundSize = `cover`;
// 	document.querySelector('.category_image2').style.background = `url(./images/${images[1]}) no-repeat`;
// 	document.querySelector('.category_image2').style.backgroundSize = `cover`;

// 	document.querySelector('.category_image3').style.background = `url(./images/${images[2]}) no-repeat`;
// 	document.querySelector('.category_image3').style.backgroundSize = `cover`;

// }

// function slideFromRight(){
// 	images = ['baradhoo.jpeg','barbarooni.jpg','basal.jpg','qaji.jpg','xabuub.jpg'];

// }

// categoriesSlider();
