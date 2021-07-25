window.addEventListener('load', () => {
    let long;
    let lat;


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // const APIkey = "473eb300e895e111f6279e6652e5728e";

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=11bebb8f7bec98cb59350cfe24083696`;

            fetch(api)
                .then(response => { return response.json(); })

                .then(data => {
                    console.log(data);
                    let na = data.name;
                    var { temp, name } = data.main;
                    let icon1 = data.weather[0].icon;
                    const { description } = data.weather[0];



                    // var tempf =Math.floor(((temp-273.15)*1.8)+32);
                    var tempc = Math.floor(temp - 273.15);


                    document.getElementById("Decpt").innerHTML = description;

                    document.getElementById("Temperature").innerHTML = tempc;
                    document.getElementById("location").innerHTML = na;
                    document.getElementById("icon").innerHTML = `<img src="icons/${icon1}.png" style= 'height:10rem'/>`;






                });
        });



    }
});
