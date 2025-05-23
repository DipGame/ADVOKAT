// Ждем загрузки DOM перед выполнением скрипта
document.addEventListener("DOMContentLoaded", function () {
    // Находим элементы для копирования
    const phoneElement = document.querySelector('.header-top_contacts-phone');
    const targetContainer = document.querySelector('.header-help-container');
    const mainBannerMenuCopy = document.getElementById('main-banner__menu-copy');
    const headerTopMenu = document.querySelector('.header-top_menu');

    // Проверяем, что оба элемента существуют
    if (phoneElement && targetContainer) {
        // Создаем клон элемента телефона
        const phoneClone = phoneElement.cloneNode(true);
        // Добавляем клон в конец контейнера
        targetContainer.appendChild(phoneClone);
    }

    if (mainBannerMenuCopy && headerTopMenu) {
        // Создаем клон элемента телефона
        const mainBannerMenuCopyClone = headerTopMenu.cloneNode(true);
        // Добавляем клон в конец контейнера
        mainBannerMenuCopy.appendChild(mainBannerMenuCopyClone);
    }

    if (mainBannerMenuCopy && phoneElement) {
        const phoneClone = phoneElement.cloneNode(true);
        mainBannerMenuCopy.appendChild(phoneClone);
    }

    if (document.querySelector('.admin')) {
        console.log('copyElements.js finish work');
    }
})