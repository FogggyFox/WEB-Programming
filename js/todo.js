function change_language() {
    let label_lang = document.querySelector(".label_language")
    let title = document.querySelector(".naming")
    let label_max_num_of_tasks = document.querySelector(".number")
    let sbm_button = document.querySelector("#submit")
    let save_button = document.querySelector("#save")
    let clear_button = document.querySelector("#clear")

    let header_table = get_header_table()
    let russian_header_table = ["Тип идеи", "Содержание идеи", "Желаемое время реализации"]
    let english_header_table = ["Type of idea", "Idea", "When?"]

    let lang = document.getElementById("language").value;

    switch (lang) {
        case "rus":
            title.innerText = "Список пожеланий"
            label_lang.innerText = "Выберите язык:"
            label_max_num_of_tasks.innerText = "Количество пожеланий:"
            sbm_button.innerText = "Принять"
            save_button.innerText = "Сохранить"
            clear_button.innerText = "Очистить"

            header_table.forEach((elem, index) => {
                elem.innerText = russian_header_table[index]
            })
            break;
        case "eng":
            title.innerText = "WishList"
            label_lang.innerText = "Choose language:"
            label_max_num_of_tasks.innerText = "Number of wishes:"
            sbm_button.innerText = "Send"
            save_button.innerText = "Save"
            clear_button.innerText = "Clear"

            header_table.forEach((elem, index) => {
                elem.innerText = english_header_table[index]
            })
            break;
        default:
            break;
    }
}

function get_header_table() {
    let type = document.querySelector(".typeidea");
    let idea = document.querySelector(".idea");
    let when = document.querySelector(".when");

    return [type, idea, when]
}

function generate_table() {
    let table = document.querySelector(".table")
    let count = table.childNodes.length
    for(let i = 0; i < count - 2; i++) {
        table.removeChild(table.lastChild)
    }
    let rows = document.getElementById("number").value

    for(let i = 0; i < rows; i++) {
        let tr = document.createElement("tr")
        for (let j = 0; j < 3; j++) {
            let th = document.createElement("th")
            let textarea = document.createElement("textarea")
            textarea.setAttribute("id", `item${i}_${j}`)
            textarea.setAttribute("onchange", "save_data_cell(this)")
            th.appendChild(textarea)
            tr.appendChild(th)
        }
        table.appendChild(tr)
    }
}

function save_params() {
    let count = document.getElementById("number").value;
    let lang = document.getElementById("language").value;

    localStorage.setItem("rows", count);
    localStorage.setItem("lang", lang);
}

function save_data_cell(elem) {
    localStorage.setItem(elem.getAttribute("id"), elem.value)
}

function get_data_cells() {
    let rows = document.getElementById("number").value;
    let col = 3;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < col; j++) {
            const id = `item${i}_${j}`
            let textarea = document.getElementById(id);
            textarea.value = localStorage.getItem(id)
        }
    }
}

function init() {
    rows = localStorage.getItem("rows");
    lang = localStorage.getItem("lang");

    console.log(rows)

    document.getElementById("number").value = rows;

    let lang_input = document.getElementById("language");
    for (let i = 0; i < lang_input.options.length; i++) {
        const element = lang_input.options[i];
        if (element.value == lang) {
            element.setAttribute("selected", "selected")
            change_language()
            break;
        }
        
    }

    generate_table()
    get_data_cells()
}

function clear_all() {
    localStorage.clear();
    document.getElementById("number").value = 1;
}