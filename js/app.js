
/**
 * HTML element variables
 */
let HAMBURGER_MENU = null;
let NEW_NOTE_BUTTON = null;
let NEW_NOTE = null;
let NOTE_LIST_ITEMS = null;
let NOTE_TITLE = null;
let NOTE_CONTENT = null;
let NOTE_VIEW = null;
let NOTE_VIEW_TITLE = null;
let NOTE_VIEW_CONTENT = null;
let THEME_BUTTON = null;

/**
 * Whether the notepad area and buttons are shown.
 * If false, the `NEW_NOTE_BUTTON` div will be shown instead
 */
let NOTE_AREA_OPEN = false;

/**
 * Whether the hamburger menu sidebar is shown.
 */
let NOTE_LIST_OPEN = false;

/**
 * Array for note storage.
 * Hardcoded 3 notes.
 */
const NOTE_ARRAY = [
    {
        title: 'Note 1',
        content: 'I am note 1 :D'
    },
    {
        title: 'Note 2',
        content: 'I am note 2 :)'
    },
    {
        title: 'Note 3',
        content: 'I am note 3 (:'
    }
];

/**
 * Default theme to use when page loads.
 * Can be either 'light' or 'dark'.
 * Whatever this is set to is the fallback for when the page loads.
 * OS colour preference will override this.
 */
let THEME = 'light';


function setDefaultTheme() {
    let scheme = 'light';

    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            scheme = 'dark';
        }
    }
    
    THEME = scheme;
}

/**
 * Toggle the application's colour theme.
 */
function toggleTheme() {

    if (THEME == 'light') {
        THEME = 'dark';
    } else {
        THEME = 'light';
    }

    renderTheme();
}

/**
 * Apply the current colour theme.
 */
function renderTheme() {

    document.documentElement.setAttribute('data-theme', THEME);

    setValue(THEME_BUTTON, `theme: ${THEME}`);
}

/**
 * Toggle visibility of note textbox and title.
 * 
 *  @param {Boolean} force If true, this will re-run closing styles, even if it is already closed.
 */
function toggleNoteArea(force = false) {

    if (NOTE_AREA_OPEN || force) {
        hideElement(NEW_NOTE);
        showElement(NEW_NOTE_BUTTON);
    } else {
        showElement(NEW_NOTE);
        hideElement(NEW_NOTE_BUTTON);
    }

    hideElement(NOTE_VIEW);

    if (force) {
        NOTE_AREA_OPEN = false;
        return;
    }

    NOTE_AREA_OPEN = !NOTE_AREA_OPEN;
}

/**
 * View a note
 * 
 * @param {String} title Title of note to view
 */
function viewNote(title) {

    toggleNoteArea(true);

    showElement(NOTE_VIEW);
    hideElement(NEW_NOTE_BUTTON);

    const note = getNoteByTitle(title);

    setValue(NOTE_VIEW_TITLE, note.title, true);
    setValue(NOTE_VIEW_CONTENT, note.content, true);
}

/**
 * Hide note view div.
 * Shows default "create new note" button once closed.
 */
function hideNote() {

    hideElement(NOTE_VIEW);
    setValue({ element: NOTE_VIEW_TITLE, html: true });
    setValue({ element: NOTE_VIEW_CONTENT, html: true });

    showElement(NEW_NOTE_BUTTON);
}

/**
 * Toggle visibility of the note list sidebar
 */
function toggleNoteList() {

    if (NOTE_LIST_OPEN) {
        hideElement(HAMBURGER_MENU);
    } else {
        showElement(HAMBURGER_MENU)
    }

    NOTE_LIST_OPEN = !NOTE_LIST_OPEN;
}

/**
 * Create a new note.
 */
function saveNote() {

    const title = NOTE_TITLE.value.trim();

    if (title == '') {
        alert('Please enter a title!');
        return;
    }

    const content = NOTE_CONTENT.value;

    if (content == '') {
        alert('Please enter content!');
        return;
    }

    if (getNoteByTitle(title) != undefined) {
        alert('A Note with that title already exists!');
        return;
    }

    NOTE_ARRAY.push({
        title: title,
        content: content
    });

    setValue(NOTE_TITLE);
    setValue(NOTE_CONTENT);

    listNotes();
    viewNote(title);
}

/**
 * List all note titles in an HTML list.
 */
function listNotes() {

    let output = '';

    NOTE_ARRAY.forEach(note => {
        output += `<li class="note-list-item" onclick="viewNote('${note.title}')">${note.title}</li>`;
    });

    setValue(NOTE_LIST_ITEMS, output, true);
}

/**
 * Get note object for the note stored with the supplied title.
 * Will return `undefined` if note does not exist.
 * 
 * @param {String} title Title of note to find
 */
function getNoteByTitle(title) {

    for (const note of NOTE_ARRAY) {
        if (note.title == title) {
            return note;
        }
    }

    return undefined;
}

/**
 * Hide this element.
 * If `fade` is true, it will apply CSS classes to use transitions,
 * otherwise it will use CSS classes with no transistions.
 * 
 * @param {Element} element 
 * @param {Boolean} fade 
 */
function hideElement(element, fade = true) {
    if (fade) {
        element.classList.add('hidden');
        element.classList.remove('show');
    } else {
        element.classList.add('hidden-no-fade');
        element.classList.remove('show-no-fade');
    }
}

/**
 * Show this element.
 * 
 * @param {Element} element 
 */
function showElement(element) {
    element.classList.add('show');
    element.classList.remove('hidden');
}

/**
 * Set an element's contents to provided value.
 * If `html` is true, it will use the `innerHTML` property instead of `value`.
 * 
 * @param {Element} element 
 * @param {String} value 
 * @param {Boolean} html 
 */
function setValue(element, value = '', html = false) {
    if (html) {
        element.innerHTML = value;
    } else {
        element.value = value;
    }
}

/**
 * When the page loads:
 *     - Initialize our element variables for easy reuse
 *     - Hide elements which require being manually opened
 *     - Get system colour scheme preference + listen for updates
 *     - Set the sidebar of all notes
 */
window.onload = () => {

    THEME_BUTTON = document.getElementById('theme-button');

    HAMBURGER_MENU = document.getElementById('hamburger-menu');
    hideElement(HAMBURGER_MENU, false);

    NEW_NOTE_BUTTON = document.getElementById('new-note-button');

    NEW_NOTE = document.getElementById('new-note');
    hideElement(NEW_NOTE, false);

    NOTE_LIST_ITEMS = document.getElementById('note-list-items');

    NOTE_TITLE = document.getElementById('note-title');
    NOTE_CONTENT = document.getElementById('note-content');

    NOTE_VIEW = document.getElementById('note-view');
    hideElement(NOTE_VIEW, false);
    NOTE_VIEW_TITLE = document.getElementById('note-view-title');
    NOTE_VIEW_CONTENT = document.getElementById('note-view-content');

    setDefaultTheme();
    renderTheme();

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            setDefaultTheme();
            renderTheme();
        });
    }

    listNotes();
}
