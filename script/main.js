(function()  {
    var theImages = document.querySelectorAll('.image-holder'),
		theHeading = document.querySelector('.heading'),
		theSubhead = document.querySelector('.main-copy h2'),
		theSeasontext = document.querySelector('.main-copy p'),
		appliedClass;

	function changeElements() {
		// muke sure event handling is working
		//debugger;
		let objectIndex = dynamicContent[this.id];
		//grab the object that corresponds to the ID of the elements clicked on
		let subImages = document.querySelector('.subImagesContainer');

		//remove all subimage
		while(subImages.firstChild) {
			subImages.removeChild(subImages.firstChild);
		}

		// add same image at the bottom of the page
		objectIndex.images.forEach(function(image, index) {
		// create a new image element
			let newSubImg = document.createElement('img');
			//add a css class to it
			newSubImg.classList.add('thumb');
			//add a source
			newSubImg.src = "images/" + objectIndex.images[index];
			//add it to the page


      //add some data to thuamnai
      newSubImg.dataset.index = index;

      //add some event hanting
      newSubImg.addEventListener('click', function() { poplightbox(index, objectIndex); }, false);

			subImages.appendChild(newSubImg);

		});




		//remove the lst css class applied
		theSubhead.classList.remove(appliedClass);
        theHeading.classList.remove(appliedClass);




		//change the color of the elements
		theSubhead.classList.add(this.id);
        theHeading.classList.add(this.id);



		//change the contant of the pages
		//firstchild.nodevalue is the same as innerhtml (kind of)
		theSubhead.firstChild.nodeValue = objectIndex.headline;
		theSeasontext.firstChild.nodeValue = objectIndex.text;




		appliedClass = this.id;
	}




	theImages.forEach(function(element, index) {
		// loop thourge the image and add event handing to each one
		element.addEventListener('click' , changeElements, false);
	});

	//theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
	//theSeasontext.firstChild.nodeValue = dynamicContent['spring'].text;
	//theHeading.classList.add('spring');

	//document.querySelector('#spring').click();
  function poplightbox(currentIndex, currentobject) {
    //debugger;

    // quick scroll fix to make light box cover everything
    window.scrollTo(0, 0);

    let lightbox = document.querySelector('.lightbox');
    let lightboxImg = lightbox.querySelector('img');
    let lightboxDesc = lightbox.querySelector('p');
    let lightboxclose = lightbox.querySelector('.close-lightbox');

    //put the data in the lightbox element
    lightboxImg.src = "images/" + currentobject.images[currentIndex];
    lightboxDesc.innerHTML = currentobject.imageDescription[currentIndex];


    lightbox.style.display = "block";
    //wiree up the close lightbox button
    lightboxclose.addEventListener('click', closelightbox, false);
  }


  function closelightbox() {
    //debugger;
    //reset and close-botton
	  let lightbox = document.querySelector('.lightbox');
	  lightbox.style.display="none";
	  document.style.display="block";
  }

	// more programme type way to do the same thing
	changeElements.call(document.querySelector('#spring'));
})();
