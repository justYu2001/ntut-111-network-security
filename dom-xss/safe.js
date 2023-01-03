(() => {
    const fetchPhotos = async () => {
        const url = "https://jsonplaceholder.typicode.com/photos";
    
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };
    
    const card = (photo) => {
        return (`
            <div class="col-3 my-4">
                <div class="card">
                    <img src="${photo.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${photo.title}</p>
                    </div>
                </div>
            </div>
        `);
    }
    
    
    const showPhotos = async (keyword) => {
        const photos = await fetchPhotos();
        
        const regex = new RegExp(`^.*${keyword}.*$`);
        
        const filteredPhotos = photos.filter((photo) => regex.test(photo.title));
        
        const photosHTML = filteredPhotos.map((photo) => card(photo))
                                         .slice(0, 10)
                                         .join("");
        
        const photoList = document.getElementById("photo-list");
        photoList.innerHTML = photosHTML;
    };
    
    const getKeyword = () => {
        const url = new URL(window.location.href);
        const keyword = url.searchParams.get("keyword");
        return keyword;
    };

    const keyword = getKeyword();

    const searchResult = document.getElementById("search-result");

    searchResult.innerText = `${keyword}`;

    if (!keyword) {
        searchResult.parentElement.classList.add("invisible");
    }

    showPhotos(keyword);

    const keywordInput = document.getElementById("keyword");
    
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", function() {
        const keyword = keywordInput.value;

        window.location.href = `?keyword=${keyword}`;
    });
})();