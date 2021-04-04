
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
let note_area_open = false;

/**
 * Whether the hamburger menu sidebar is shown.
 */
let note_list_open = false;

/**
 * Array for note storage.
 * Hardcoded 3 notes.
 */
const noteArray = [
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
 * Can be either 'light' or 'dark'
 */
let theme = 'light';

/**
 * Toggle the application's colour theme.
 */
function toggleTheme() {

    if (theme == 'light') {
        theme = 'dark';
    } else {
        theme = 'light';
    }

    document.documentElement.setAttribute('data-theme', theme);

    THEME_BUTTON.value = `theme: ${theme}`;
}

/**
 * Toggle visibility of note textbox and title.
 * 
 *  @param {Boolean} force If true, this will re-run closing styles, even if it is already closed.
 */
function toggleNoteArea(force = false) {

    if (note_area_open || force) {
        hideElement(NEW_NOTE);
        showElement(NEW_NOTE_BUTTON);
    } else {
        showElement(NEW_NOTE);
        hideElement(NEW_NOTE_BUTTON);
    }

    hideElement(NOTE_VIEW);

    if (force) {
        note_area_open = false;
        return;
    }

    note_area_open = !note_area_open;
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

    NOTE_VIEW_TITLE.innerHTML = note.title;
    NOTE_VIEW_CONTENT.innerHTML = note.content;
}

/**
 * Hide note view div.
 * Shows default "create new note" button once closed.
 */
function hideNote() {

    hideElement(NOTE_VIEW);
    NOTE_VIEW_TITLE.innerHTML = '';
    NOTE_VIEW_CONTENT.innerHTML = '';

    showElement(NEW_NOTE_BUTTON);
}

/**
 * Toggle visibility of the note list sidebar
 */
function toggleNoteList() {

    if (note_list_open) {
        hideElement(HAMBURGER_MENU);
    } else {
        showElement(HAMBURGER_MENU)
    }

    note_list_open = !note_list_open;
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

    noteArray.push({
        title: title,
        content: content
    });

    NOTE_TITLE.value = '';
    NOTE_CONTENT.value = '';

    listNotes();
    viewNote(title);
}

/**
 * List all note titles in an HTML list.
 */
function listNotes() {

    let output = '';

    noteArray.forEach(note => {
        output += `<li class="note-list-item" onclick="viewNote('${note.title}')">${note.title}</li>`;
    });

    NOTE_LIST_ITEMS.innerHTML = output;
}

/**
 * Get note object for the note stored with the supplied title.
 * Will return `undefined` if note does not exist.
 * 
 * @param {String} title Title of note to find
 */
function getNoteByTitle(title) {

    for (const note of noteArray) {
        if (note.title == title) {
            return note;
        }
    }

    return undefined;
}

function hideElement(element, fade = true) {
    if (fade) {
        element.classList.add('hidden');
        element.classList.remove('show');
    } else {
        element.classList.add('hidden-no-fade');
        element.classList.remove('show-no-fade');
    }
}

function showElement(element) {
    element.classList.add('show');
    element.classList.remove('hidden');
}

/**
 * When the page loads:
 *     - Initialize our element variables for easy reuse
 *     - Hide elements which require being manually opened
 *     - Set the sidebar of all notes
 *     - Set the theme switcher button text
 */
window.onload = () => {

    THEME_BUTTON = document.getElementById('theme-button');
    THEME_BUTTON.value = `theme: ${theme}`;

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

    listNotes();
}
