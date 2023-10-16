const PLACEMARKS = [
  {
    lalitude: 55.796294,
    longitude: 37.691863,
    attr: 'address-1'
  },
  {
    lalitude: 55.716294,
    longitude: 37.691863,
    attr: 'address-2'
  },
  {
    lalitude: 54.793294,
    longitude: 37.699863,
    attr: 'address-3'
  },
  {
    lalitude: 55.796204,
    longitude: 38.691893,
    attr: 'address-4'
  },
];

function removeContent(mainMap) {
  mainMap.controls.remove('geolocationControl');
  mainMap.controls.remove('searchControl');
  mainMap.controls.remove('trafficControl');
  mainMap.controls.remove('typeSelector');
  mainMap.controls.remove('rulesControl');
}

function animationMap(placemark, map) {
  const options = {
    flying: true,
    duration: 1000,
  };

   map.panTo([placemark[0], placemark[1]], options);
}

function changeActiveClass(attrEl, attr, el) {
  if (attrEl === attr) {
    el.classList.add('active');
  } else {
    el.classList.remove('active');
  }
}

 function init() {
    if (document.querySelector('.addresses__map')) {
      const addressDescs = document.querySelectorAll('.addresses__desc');

      const mainMap = new ymaps.Map('map', {
        center: [55.796294, 37.691863],
        zoom: 11,
      });

      PLACEMARKS.forEach((placemark) => {
        const newPlacemark = new ymaps.Placemark(
          [placemark.lalitude, placemark.longitude],
          {
            myDataAttr: placemark.attr,
          },
          {
            hideIconOnBalloonOpen: false,
            iconLayout: 'default#image',
            iconImageHref: placemark.attr !== 'address-1' ? './img/map/placemark.svg' : './img/map/placemark-active.svg',
            icon_imagesize: [35, 54],
            iconImageOffset: [-18, -27],
          }
        );

        mainMap.geoObjects.add(newPlacemark);

        newPlacemark.events.add('click', () => {
          mainMap.geoObjects.each((geoObject) =>
            geoObject.options.set('iconImageHref', './img/map/placemark.svg')
          );

          addressDescs.forEach((address) => {
            const attr = address.getAttribute('data-address-desc');
            changeActiveClass(newPlacemark.properties.get('myDataAttr'), attr, address);
          });

          animationMap([placemark.lalitude, placemark.longitude], mainMap);

          newPlacemark.options.set('iconImageHref', './img/map/placemark-active.svg');
        });
      });

      removeContent(mainMap);

      var suggestView = new ymaps.SuggestView("citySearch", {
        provider: {
          suggest: (request, options) => {
            return ymaps.suggest(request, { results: 5 });
          },
        },
      });

      suggestView.events.add("select", function (e) {
        var selectedItem = e.get("item");
        var city = selectedItem.value;
        geocode(city);
      });

      function geocode(city) {
        ymaps.geocode(city).then(function (res) {
          var firstGeoObject = res.geoObjects.get(0);
          mainMap.setCenter(firstGeoObject.geometry.getCoordinates(), 10);
        });
      }

      function searchCity() {
        var query = document.getElementById("citySearch").value;
        geocode(query);
      }

      const btnSearch = document.querySelector('.addresses__form button');
      btnSearch.addEventListener('click', searchCity);

      const inputSearch = document.querySelector('.addresses__form input');
      inputSearch.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
          searchCity();
        }
      });
    }
  }
  ymaps.ready(init);