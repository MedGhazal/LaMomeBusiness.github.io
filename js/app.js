const name = document.querySelector('input[name=name]');
const tel = document.querySelector('input[type=tel]');
const email = document.querySelector('input[type=email]');
const message = document.querySelector('textarea');

const data = {
	"french": { 'name': 'Nom', 'email': 'E-Mail', 'message': 'Message', 'tel': 'Téléphone' },
	"english": { 'name': 'Name', 'email': 'E-Mail', 'message': 'Message', 'tel': 'Phone number' },
	"arabic": { 'name': 'الاسم', 'email': 'بريد الالكتروني', 'message': 'رسالة', 'tel': 'رقم الهاتف' },
}

name.placeholder = data['french']['name'];
tel.placeholder = data['french']['tel'];
email.placeholder = data['french']['email'];
message.placeholder = data['french']['message'];

function getContent(language_tag){
	document.querySelectorAll(".language-link, .language-link-small")
		.forEach(el => document.querySelectorAll(
			`.${el.getAttribute('href').substring(1)}, .${el.getAttribute('href').substring(1)}-block`)
			.forEach(
				el => el.style.display = 'none'
			)
	);
	document.querySelectorAll(`.${language_tag}`)
		.forEach(
			el => el.style.display = 'inline-block'
	);
	document.querySelectorAll(`.${language_tag}-block`)
		.forEach(
			el => el.style.display = 'block'
	);
	if (`${language_tag}` === 'fr-content') {
		name.placeholder = data['french']['name'];
		tel.placeholder = data['french']['tel'];
		email.placeholder = data['french']['email'];
		message.placeholder = data['french']['message'];
		document.getElementById('content').setAttribute('dir', 'ltr');
	} else if (`${language_tag}`=== 'ar-content') {
		name.placeholder = data['arabic']['name'];
		tel.placeholder = data['arabic']['tel'];
		email.placeholder = data['arabic']['email'];
		message.placeholder = data['arabic']['message'];
		document.getElementById('content').setAttribute('dir', 'rtl');
	} else if (`${language_tag}` === 'eng-content') {
		name.placeholder = data['english']['name'];
		tel.placeholder = data['english']['tel'];
		email.placeholder = data['english']['email'];
		message.placeholder = data['english']['message'];
		document.getElementById('content').setAttribute('dir', 'ltr');
	}
	document.querySelectorAll(".add-language-suffix").forEach(
		el => el.href = el.href.split('#')[0] + "#" + language_tag
	)
	document.querySelectorAll(".language-link-small").forEach(el => el.classList.remove("active"));
	document.querySelector(`a[href='#${language_tag}']`).classList.add("active");
}

function initializePage() {
	link = window.location.href.split('#');
	if (link.length === 2) {
		if (link[1] === 'fr-content' || link[1] === 'eng-content' || link[1] === 'ar-content') {
			getContent(link[1]);
		} else {
			getContent('fr-content');
		}
	} else {
		getContent('fr-content');
	}
}

function onClickHandeler() {
	for (const link of document.querySelectorAll(".language-link, .language-link-small")) {
		link.addEventListener("click", function(event) {
			getContent(`${event.currentTarget.getAttribute('href').substring(1)}`)
		});
	}
}

onClickHandeler();
var slideIndex = 1;
var slideIndexCollaborators = 1;

showSlidesCollaborators(slideIndexCollaborators);
showSlides(slideIndex)
toggelMenu();

function plusSlides(n) { showSlides(slideIndex += n); }

function currentSlide(n) { showSlides(slideIndex = n); }

function plusSlidesCollaborators(n) { showSlidesCollaborators(slideIndexCollaborators += n); }

function currentSlideCollaborators(n) { showSlidesCollaborators(slideIndexCollaborators = n); }

function showSlides(n) {
	var slides = document.querySelectorAll(".showcase-text");
	if (slides.length != 0) {
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		if (document.querySelector(".fr-content").style.display === "block") {
			slides = document.querySelectorAll(".showcase-text.fr");
		}
		else if (document.querySelector(".eng-content").style.display === "block") {
			slides = document.querySelectorAll(".showcase-text.eng");
		}
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) { slideIndex = 1; }
		if (n < 1) { slideIndex = slides.length }
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "grid";
		dots[slideIndex-1].className += " active";
	}
}

function showSlidesCollaborators(n) {
	var slides = document.querySelectorAll(".collaborator");
	if (slides.length!=0) {
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		if (n > slides.length) { slideIndexCollaborators = 1; }
		if (n < 1) { slideIndexCollaborators = slides.length }
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slides[slideIndexCollaborators-1].style.display = "grid";
	}
}

function toggelMenu() {

	var hamburgerMenu = document.getElementById('hamburger');
	hamburgerMenu.addEventListener("click", function(event) {
		var logo = document.getElementById("lamome-business-logo") ;
		if (logo.style.display == 'block') {
			logo.style.display = 'none';
		} else {
			logo.style.display = 'block';
		}
		
		var sideNavPanel = document.getElementById("side-nav-panel");
		if (sideNavPanel.style.display === 'flex') {
			sideNavPanel.style.display = 'none';
		} else {
			sideNavPanel.style.display = 'flex';
		}

		var sideLanguageNav = document.getElementById("side-language-nav");
		if (sideLanguageNav.style.display === 'flex') {
			sideLanguageNav.style.display = 'none';
		} else {
			sideLanguageNav.style.display = 'flex';
		}
	});

}
var timeout;
function myFunction() {
	loader_container = document.getElementById("loader-container");
	if ( loader_container != null ) { 
		timeout = setTimeout(showPage, 1000);
	} else {
		timeout = setTimeout(showPage, 0);
	}
}
function showPage() {
	loader_container = document.getElementById("loader-container");
	if ( loader_container != null ) { 
		loader_container.style.display = "none";
		document.getElementById("content").style.display = "block";
	}
	initializePage();
}
