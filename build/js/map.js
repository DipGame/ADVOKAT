document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#map')) {
        ymaps.ready(function() {
            // Добавляем кастомный темный слой
            const DARK_MAP = 'custom#dark';
            ymaps.layer.storage.add(DARK_MAP, function DarkLayer() {
                return new ymaps.Layer(
                    'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&theme=dark&%c&%l&scale={{ scale }}'
                );
            });
            ymaps.mapType.storage.add(DARK_MAP, new ymaps.MapType('Dark Map', [DARK_MAP]));

            // Создаем SVG-иконку
            var svgIcon = `<svg width="63" height="73" viewBox="0 0 63 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_148_4119)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.9067 61.0879C54.6653 56.5018 63 45.0338 63 31.6121C63 14.1532 48.897 0 31.5 0C14.103 0 0 14.1532 0 31.6121C0 45.0338 8.33469 56.5018 20.0932 61.0879L20.0256 61.1583L31.5 73.1041L42.9744 61.1583L42.9067 61.0879Z" fill="#0E7490"/>
                        <path d="M29.9234 37.4281L25.0898 48H46.1588L47.4117 45.2595L50.9923 37.4281H29.9234Z" fill="white"/>
                        <path d="M32.4291 31.9491L32.4285 31.951L41.3256 31.9491L37.745 24.1177L36.4921 21.3773H31.2182L31.3938 20.993L33.8551 15.6103L33.8545 15.609L30.8325 9L27.8106 15.609L25.3493 20.9918L25.173 21.3773H15.5059L20.3394 31.9491L13 48H19.0451L26.3839 31.9491H32.4291Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_148_4119">
                            <rect width="63" height="73" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>`;

            // Создаем карту с темным типом
            var myMap = new ymaps.Map("map", {
                center: [61.265136, 73.439125], // Центр карты
                zoom: 10,
                type: DARK_MAP,
                controls: [],
            }, {
                suppressMapOpenBlock: true
            });

            myMap.options.set('suppressObsoleteBrowserNotification', true);

            // Создаем дефолтную метку (Placemark) с балуном
            var myPlacemark = new ymaps.Placemark([61.265136, 73.439125], {
                balloonContentHeader: '<b>Адвокат в Москве и МО - Александр Яськов</b>',
                balloonContentBody: 'Юридические услуги по семейным, наследственным, уголовным, арбитражным делам, вопросам недвижимости. Получите пошаговый план решения вашей проблемы уже на первой консультации!'
            });
            // Добавляем метку на карту
            myMap.geoObjects.add(myPlacemark);
        });
    }
});