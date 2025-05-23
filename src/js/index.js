
document.addEventListener("DOMContentLoaded", function () {

    function addClass(el, class_name) {
        el.classList.add(class_name);
    }
    function removeClass(el, class_name) {
        el.classList.remove(class_name);
    }
    function toggleClass(el, class_name) {
        el.classList.toggle(class_name);
    }

    let loadSvg = document.getElementById('load-svg');

    function addLoad() {
        addClass(loadSvg, 'open');
    }
    function removeLoad() {
        removeClass(loadSvg, 'open');
    }

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');

    let lastScrollTop = 0;

    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 0) {
        // Scrolling down
        addClass(header, 'opened');
    } else {
        // Scrolling up to top
        if (currentScroll === 0) {
            removeClass(header, 'opened');
        }
    }
    lastScrollTop = currentScroll;

    if (document.querySelector('body.padding')) {
        addClass(header, 'opened');
    } else {
        window.addEventListener('scroll', function () {
            if (window.innerWidth > 960) {
                let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
                if (currentScroll > lastScrollTop && currentScroll > 0) {
                    // Scrolling down
                    addClass(header, 'opened');
                } else {
                    // Scrolling up to top
                    if (currentScroll === 0) {
                        removeClass(header, 'opened');
                    }
                }
                lastScrollTop = currentScroll;
            }
            
        });
    }

    if (document.getElementById('burger-btn')) {
        const burgerBtn = document.getElementById('burger-btn');

        burgerBtn.addEventListener('click', function () {
            toggleClass(header, 'mob-menu-opened');
        });
    }

    if (document.querySelector('.quest')) {

        const quest = document.querySelector('.quest');

        if (quest.querySelector(".quest-sect .quest-title")) {
            const titles = quest.querySelectorAll(".quest-sect .quest-title");

            titles.forEach((title) => {

                let sect_check = title.closest(".quest-sect"); // Находим родительский .sect
                let cont_check = sect_check.querySelector(".quest-cont"); // Находим .cont внутри .sect



                if (sect_check.classList.contains("active")) {
                    // Вычисляем реальную высоту содержимого
                    cont_check.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                    const height = cont_check.scrollHeight; // Получаем высоту содержимого
                    cont_check.style.height = "0"; // Возвращаем высоту к 0 для анимации
                    setTimeout(() => {
                        cont_check.style.height = `${height}px`; // Устанавливаем высоту для анимации
                    }, 10); // Небольшая задержка для корректной работы браузера
                } else {
                    // Анимируем закрытие
                    cont_check.style.height = `${cont_check.scrollHeight}px`; // Фиксируем текущую высоту
                    setTimeout(() => {
                        cont_check.style.height = "0"; // Уменьшаем высоту до 0
                    }, 10); // Небольшая задержка для корректной работы браузера
                }

                sect_check.addEventListener('click', () => {
                    const cont = sect_check.querySelector(".quest-cont"); // Находим .cont внутри .sect

                    // Переключаем класс active
                    sect_check.classList.toggle("active");

                    if (sect_check.classList.contains("active")) {
                        // Вычисляем реальную высоту содержимого
                        cont.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                        const height = cont.scrollHeight; // Получаем высоту содержимого
                        cont.style.height = "0"; // Возвращаем высоту к 0 для анимации
                        setTimeout(() => {
                            cont.style.height = `${height}px`; // Устанавливаем высоту для анимации
                        }, 10); // Небольшая задержка для корректной работы браузера
                    } else {
                        // Анимируем закрытие
                        cont.style.height = `${cont.scrollHeight}px`; // Фиксируем текущую высоту
                        setTimeout(() => {
                            cont.style.height = "0"; // Уменьшаем высоту до 0
                        }, 10); // Небольшая задержка для корректной работы браузера
                    }
                })

            });
        }

    }

    if (document.querySelector('.sect_filt_v1')) {
        const sect_filt_v1 = document.querySelector('.sect_filt_v1');
        const all_btn_filt_v1 = sect_filt_v1.querySelectorAll('.btn_filt_v1');
        const all_cont_filt_v1 = sect_filt_v1.querySelectorAll('.cont_filt_v1');

        let num_1 = 0;
        let dataIdCheck;
        all_btn_filt_v1.forEach(btn => {
            let btnDataId = btn.getAttribute("data-id");
            if (num_1 == 0) {
                addClass(btn, 'active');
                dataIdCheck = btnDataId;
            } else {
                removeClass(btn, 'active');
            }

            all_cont_filt_v1.forEach(cont => {
                if (num_1 == 0) {
                    addClass(cont, 'invise');
                } else {
                    removeClass(cont, 'invise');
                }

            });

            btn.addEventListener('click', () => {


                if (btnDataId == "all") {
                    all_btn_filt_v1.forEach(el => {
                        removeClass(el, 'active');
                    })

                    all_cont_filt_v1.forEach(cont => {
                        removeClass(cont, 'invise');
                    });

                } else {
                    all_btn_filt_v1.forEach(el => {
                        removeClass(el, 'active');
                    })

                    all_cont_filt_v1.forEach(cont => {
                        let contDataId = cont.getAttribute("data-id");
                        if (btnDataId != contDataId) {
                            addClass(cont, 'invise');
                        } else {
                            removeClass(cont, 'invise');
                        }
                    });
                }

                addClass(btn, 'active');
            })

            num_1++;
        });

        all_cont_filt_v1.forEach(cont => {
            let contDataId = cont.getAttribute("data-id");

            if (dataIdCheck == "all") {
                removeClass(cont, 'invise');
            } else if (dataIdCheck != contDataId) {
                addClass(cont, 'invise');
            } else {
                removeClass(cont, 'invise');
            }

        });
    }

    if (document.querySelector('[data-href]')) {
        const data_href = document.querySelectorAll('[data-href]');

        data_href.forEach(element => {
            element.addEventListener('click', (e) => {

                if (e.target.getAttribute('data-popup-open')) {
                    return;
                }

                if (e.target.tagName != 'A') {
                    return;
                }
                window.location = element.getAttribute('data-href');
            })
        });
    }

    if (document.querySelector('.checkbox')) {
        const checkboxs = document.querySelectorAll('.checkbox');

        checkboxs.forEach(el => {
            let checkBoxBtn = el.querySelector('.check-box-btn');

            checkBoxBtn.addEventListener('click', () => {
                if (checkBoxBtn.getAttribute('data-toggle') == 'y') {
                    toggleClass(el, 'checked');
                } else {
                    addClass(el, 'checked');
                    removeClass(el, 'err');
                }
            })
        });
    }

    if (document.querySelector('form')) {
        var overlay = document.querySelector('.overlay');
        var popupCheck = document.querySelector('.popupCheck')
        var popupCheckCloseBtn = popupCheck.querySelector('.close-btn');

        popupCheckCloseBtn.addEventListener('click', () => {
            removeClass(overlay, 'open');
            removeClass(popupCheck, 'open');
        })
        overlay.addEventListener('click', () => {
            document.querySelectorAll('.open').forEach(el => {
                removeClass(el, 'open');
            })
        })

        if (document.querySelector('.btn_pop')) {
            const btnPopAdd = document.querySelectorAll('.btn_pop')

            btnPopAdd.forEach(element => {
                element.addEventListener('click', () => {
                    addClass(overlay, 'open');
                })
            });
        }

    }

    if (document.querySelector('[data-popup-open]')) {
        let popupOpenBtns = document.querySelectorAll('[data-popup-open]');

        popupOpenBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let btnDataId = btn.getAttribute('data-popup-open');

                let dataPopupServiceName = btn.getAttribute('data-popup-service-name');

                let dataPopupStockName = btn.getAttribute('data-popup-stock-name');

                let dataPopupServiceLink = btn.getAttribute('data-popup-service-link');

                let popup = document.getElementById(`${btnDataId}`);
                if (popup) {

                    let popupForm = popup.querySelector("form");

                    if (popupForm) {

                        let serviceLinkInput = popupForm.querySelector('input[name="service-link"]');
                        if (serviceLinkInput) {
                            popupForm.removeChild(serviceLinkInput);
                        }

                        let serviceNameInput = popupForm.querySelector('input[name="service-name"]');
                        if (serviceNameInput) {
                            popupForm.removeChild(serviceNameInput);
                        }

                        let stockNameInput = popupForm.querySelector('input[name="stock-name"]');
                        if (stockNameInput) {
                            popupForm.removeChild(stockNameInput);
                        }

                        if (dataPopupStockName) {
                            let stockNameInput = document.createElement("input");
                            stockNameInput.type = "hidden";
                            stockNameInput.name = "stock-name";
                            stockNameInput.value = dataPopupStockName;
                            popupForm.appendChild(stockNameInput);

                        }

                        if (dataPopupServiceName) {
                            let serviceNameInput = document.createElement("input");
                            serviceNameInput.type = "hidden";
                            serviceNameInput.name = "service-name";
                            serviceNameInput.value = dataPopupServiceName;
                            popupForm.appendChild(serviceNameInput);

                        }

                        if (dataPopupServiceLink) {
                            let serviceLinkInput = document.createElement("input");
                            serviceLinkInput.type = "hidden";
                            serviceLinkInput.name = "service-link";
                            serviceLinkInput.value = dataPopupServiceLink;
                            popupForm.appendChild(serviceLinkInput);
                        }

                    }

                    addClass(overlay, 'open');
                    addClass(popup, 'open');
                } else {
                    console.error(`Попап с ID: ${btnDataId} не найден`);
                }
            })
        });
    }

    if (document.querySelector('.form-all')) {
        const formSect = document.querySelectorAll(".form-all");
        const titlePopupCheck = popupCheck.querySelector('h2');

        let widgetId;

        function handleCaptcha(btn, input) {

            if (!window.smartCaptcha) {
                console.error("SmartCaptcha не загружен.");
                return;
            }

            widgetId = window.smartCaptcha.render(`captcha-container`, {
                sitekey: 'ysc1_NgHWeKUxazGxBCHacuCYKyDZVkScUKHZVhYjevjP07d4d7a3', // Замените на ваш Client Key
                invisible: true, // Указываем, что капча невидимая
                callback: (token) => {
                    input.value = token;
                    btn.click();
                },
            });
        }

        formSect.forEach(formSect => {

            let form = formSect.querySelector("form");
            let formBtn = formSect.querySelector("[type='submit']");
            let nameInp = formSect.querySelector("[name='name']");
            let phoneInp = formSect.querySelector("[name='phone']");
            let emailInp = formSect.querySelector("[name='email']");

            let selectType = formSect.querySelector("[name='type']");
            let selectSquare = formSect.querySelector("[name='square']");
            let typeCheckBoxs = formSect.querySelectorAll(".select_cont .checkbox");
            let checkBoxBtn = formSect.querySelector("[data-processing]");

            if (checkBoxBtn) {
                addClass(checkBoxBtn, 'checked');
            }

            if (formSect.classList.contains('popupForm')) {
                let closePopupBtn = formSect.querySelector('.close-btn');

                closePopupBtn.addEventListener('click', () => {
                    removeClass(overlay, 'open');
                    removeClass(formSect, 'open');
                })

                formSect.addEventListener('click', (e) => {
                    if (e.target.classList.contains('popupForm')) {
                        overlay.click();
                    }
                })
            }

            function allCheck() {
                if (form.classList.contains("calc")) {
                    if (form.classList.contains("calc_2")) {
                        if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17) && checkSelect(selectType) && checkSelect(selectSquare) && checkCheckBox(checkBoxBtn)) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17) && checkSelect(selectType) && checkSelect(selectSquare) && checkTypeCheckBoxs(typeCheckBoxs) && checkCheckBox(checkBoxBtn)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                } else if (form.classList.contains("audit")) {
                    if (checkInputsValid(phoneInp, 17)) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17) && checkCheckBox(checkBoxBtn)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }

            function checkCheckBox(checkbox) {
                if (checkbox.classList.contains('checked')) {
                    removeClass(checkbox, 'err');
                    return true;
                } else {
                    addClass(checkbox, 'err');
                    return false;
                }
            }

            function checkTypeCheckBoxs(array) {
                let check;
                let parant;
                array.forEach(element => {
                    parant = element.closest('.select_cont');
                    if (element.classList.contains('checked')) {
                        check = true;
                    }
                });
                if (check) {
                    removeClass(parant, 'err');
                    return true;
                } else {
                    addClass(parant, 'err');
                    formBtn.disabled = true;
                    return false;
                }
            }

            function checkSelect(select) {


                if (select.value.length > 0) {
                    removeClass(select.closest('.select_cont'), 'err');
                    return true;
                } else {
                    addClass(select.closest('.select_cont'), 'err');
                    formBtn.disabled = true;
                    return false;
                }
            }

            window.addEventListener("DOMContentLoaded", function () {
                [].forEach.call(document.querySelectorAll("[name='phone']"), function (input) {
                    var keyCode;
                    function mask(event) {
                        event.keyCode && (keyCode = event.keyCode);
                        var pos = this.selectionStart;
                        if (pos < 3) event.preventDefault();
                        var matrix = "+7 (___) ___ ____",
                            i = 0,
                            def = matrix.replace(/\D/g, ""),
                            val = this.value.replace(/\D/g, ""),
                            new_value = matrix.replace(/[_\d]/g, function (a) {
                                return i < val.length ? val.charAt(i++) : a
                            });
                        i = new_value.indexOf("_");
                        if (i != -1) {
                            i < 5 && (i = 3);
                            new_value = new_value.slice(0, i)
                        }
                        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                            function (a) {
                                return "\\d{1," + a.length + "}"
                            }).replace(/[+()]/g, "\\$&");
                        reg = new RegExp("^" + reg + "$");
                        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                            this.value = new_value;
                        }
                        if (event.type == "blur" && this.value.length < 5) {
                            this.value = "";
                        }
                    }

                    input.addEventListener("input", mask, false);
                    input.addEventListener("focus", mask, false);
                    input.addEventListener("blur", mask, false);
                    input.addEventListener("keydown", mask, false);

                });
            });

            $(function () {
                $(nameInp).keyup(function () {
                    sergey = $(this).val().toLowerCase(), spout = 'http://,https,url,.ru,.com,.net,.tk,php,.ucoz,www,.ua,.tv,.info,.org,.su,.ру,.су,.ком,.инфо,//'.split(',');
                    for (litvinov = 0; litvinov < spout.length; litvinov++) {
                        if (sergey.search(spout[litvinov]) != -1) {
                            $(this).val(sergey.replace(spout[litvinov], '[Запрещено]'));
                            return true;
                        }
                    }
                });
            });

            function checkInputsValid(input, num) {
                if (input.value.length < num) {
                    input.parentNode.classList.add("err");
                    formBtn.disabled = true;
                    return false;
                } else {
                    input.parentNode.classList.remove("err");

                    return true;
                }
            }

            let check;

            function addLisInput(input, num) {
                checkInputsValid(input, num);
                input.addEventListener('input', check = () => {
                    checkInputsValid(input, num);
                    if (allCheck()) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisInput(input) {
                input.removeEventListener('input', check)
            }

            let check_2;

            function addLisSelect(select) {
                checkSelect(select);
                select.addEventListener('change', check_2 = () => {
                    checkSelect(select);
                    if (allCheck()) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisSelect(select) {
                select.removeEventListener('change', check_2)
            }

            let check_3;

            function addLisCheck(array) {
                checkTypeCheckBoxs(array);
                array.forEach(element => {
                    element.addEventListener('click', check_3 = () => {
                        checkTypeCheckBoxs(array);
                        if (allCheck()) {
                            formBtn.disabled = false;
                        } else {
                            formBtn.disabled = true;
                        }
                    })
                });
            }

            function removeLisCheck(array) {
                array.forEach(element => {
                    element.removeEventListener('click', check_3)
                });
            }

            let check_4;

            function addLisCheckBox(checkbox) {
                checkCheckBox(checkbox);
                checkbox.addEventListener('click', check_4 = () => {
                    checkCheckBox(checkbox);
                    if (allCheck()) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisCheckBox(checkbox) {
                checkbox.removeEventListener('click', check_4);
            }

            function clearInputs(input) {
                removeLisInput(input);

                // if (checkBoxBtn) {
                //     removeClass(checkBoxBtn, 'err');
                //     removeClass(checkBoxBtn, 'checked');
                // }

                input.value = '';
            }

            function clearSelects(select) {
                removeLisSelect(select);
                select.selectedIndex = 0;
            }
            function clearTypes(array) {
                array.forEach(element => {
                    removeClass(element, "checked");
                });
            }

            function handleTextGood() {
                // window.smartCaptcha.destroy(widgetId);
                removeLoad();
                titlePopupCheck.textContent = 'Спасибо за заявку! Скоро мы вам перезвоним!';
                removeClass(formSect, 'open');
                addClass(overlay, 'open')
                addClass(popupCheck, 'open')
                if (nameInp) {
                    clearInputs(nameInp);
                }
                clearInputs(phoneInp);
                if (emailInp) {
                    clearInputs(emailInp);
                }
                if (form.classList.contains("calc")) {
                    if (form.classList.contains("calc_2")) {
                        clearSelects(selectSquare);
                        clearSelects(selectType);
                    } else {
                        clearSelects(selectSquare);
                        clearSelects(selectType);
                        clearTypes(typeCheckBoxs);
                    }
                }
                clearInputs(captchaInp);
                setTimeout(() => {
                    document.querySelectorAll('.open').forEach(el => {
                        removeClass(el, 'open');
                    })
                }, 3500);
            }

            function handleTextNoGood() {
                removeLoad();
                titlePopupCheck.textContent = 'Повторите попытку позже';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            function handleTextError() {
                removeLoad();
                titlePopupCheck.textContent = 'Что-то пошло не так';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            // Создаем скрытое поле для токена капчи
            let captchaTokenInput = document.createElement('input');
            captchaTokenInput.type = 'hidden';
            captchaTokenInput.name = `captcha_token`;

            // Добавляем скрытое поле в начало текущей формы
            form.prepend(captchaTokenInput);

            let captchaInp = form.querySelector(`[name="captcha_token"]`);

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                removeLisInput(phoneInp);

                if (nameInp) {
                    removeLisInput(nameInp);
                    addLisInput(nameInp, 1);
                }
                addLisInput(phoneInp, 17);

                if (checkBoxBtn) {
                    removeLisCheckBox(checkBoxBtn);
                    addLisCheckBox(checkBoxBtn);
                }

                if (form.classList.contains("calc")) {

                    if (form.classList.contains("calc_2")) {
                        removeLisSelect(selectType);
                        addLisSelect(selectType);

                        removeLisSelect(selectSquare);
                        addLisSelect(selectSquare);
                    } else {
                        removeLisCheck(typeCheckBoxs);
                        addLisCheck(typeCheckBoxs);

                        removeLisSelect(selectType);
                        addLisSelect(selectType);

                        removeLisSelect(selectSquare);
                        addLisSelect(selectSquare);
                    }

                }

                if (allCheck()) {
                    // if (!captchaInp.value) {
                    //     handleCaptcha(formBtn, captchaInp);
                    //     window.smartCaptcha.execute(widgetId);
                    //     // setTimeout(() => {
                    //     //     removeLoad();
                    //     // }, 10000);
                    //     return;
                    // } else {
                    //     addLoad();
                    //     if (form.classList.contains("calc")) {
                    //         if (!form.classList.contains("calc_2")) {

                    //             var arrTypeCheckBox = [];

                    //             typeCheckBoxs.forEach(box => {
                    //                 if (box.classList.contains("checked")) {
                    //                     arrTypeCheckBox.push(box.querySelector('p').textContent.trim());
                    //                 }
                    //             });
                    //         }
                    //     }

                    //     let formData = new FormData(form);
                    //     formData.append('captcha_token', captchaInp.value);

                    //     if (arrTypeCheckBox) {
                    //         formData.append('type_object', arrTypeCheckBox);
                    //     }

                    //     fetch('/local/templates/main/tools/send.php', {
                    //         method: 'POST',
                    //         body: formData,
                    //     })
                    //         .then((res) => res.json())
                    //         .then(result => {
                    //             if (result.success) {
                    //                 handleTextGood();
                    //             } else {
                    //                 handleTextNoGood();
                    //             }
                    //         })
                    //         .catch((err) => {
                    //             handleTextError();
                    //             console.log(err);
                    //         });
                    // }

                    handleTextGood();
                }

            })
        });
    }



    if (document.querySelector('.admin')) {
        console.log('index.js finish work');
    }
});