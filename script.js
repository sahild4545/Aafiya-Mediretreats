
        var Preloader = document.getElementById('loading');

        function mainfun() {
            Preloader.style.display = 'none';
        }

        var Active = document.getElementById("Active");
        var activeBtn = Active.getElementsByClassName("active-btn");
        for (var i = 0; i < activeBtn.length; i++) {
            activeBtn[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += "active";
            });
        }

// fetch lang data

        document.addEventListener("DOMContentLoaded", function () {
            // Fetch data from the JSON file
            fetch('./lang.json')
                .then(response => response.json())
                .then(data => {
                    // Get the select element
                    const countrySelect = document.getElementById('country');
        
                    // Populate the dropdown with options from the JSON data
                    data.countries.forEach(country => {
                        const option = document.createElement('option');
                        option.value = country.value;
                        option.text = country.name;
                        countrySelect.appendChild(option);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        });
        


//owl

$(document).ready(function () {
    $(".dr-cards").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
});