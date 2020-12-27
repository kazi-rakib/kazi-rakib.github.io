
    // let data = {
    //   Name: "Steve",
    //   age: 24
    // }
    // console.log(data);

    fetch('data.json')
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((json) => {
        console.log(json)
      })

    fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2016-01-01&endtime=2016-01-31&minmag=6&limit=100')
      .then((resp) => resp.json() )
      .then((json) => {
        console.log(`Total queries: ${json.features.length}`);
        // console.log(json.features[0].properties.place)
        // console.log(json.features[1].properties.place)
        // console.log(json.features[2].properties.place)
        // console.log(json.features[3].properties.place)
        // console.log(json.features[4].properties.place)

        var eq_features = json.features;
        var output="";
        for(var i=0; i < eq_features.length; i++){
          output += "<li>" 
            + ' <span class="mag"> ' + eq_features[i].properties.mag 
            + ' </span><span class="place"> ' + eq_features[i].properties.place 
            + ' </span><span class="time"> ' + eq_features[i].properties.time 
            + ' </span> ' + "</li>";
        }
        console.log("LOOP finished!")
        document.getElementById("list").innerHTML = output;
      })

