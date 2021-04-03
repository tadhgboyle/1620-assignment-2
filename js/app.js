
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
 */
const noteArray = [
    {
        title: 'Note 1',
        content: 'This is note #1!'
    },
    {
        title: 'Note 2',
        content: 'This is note #2!'
    },
    {
        title: 'Note 3',
        content: 'This is note #3!'
    }
];

/**
 * Default theme to use when page loads.
 * Can be either 'light' or 'dark'
 */
let theme = 'light';

/**
 * Toggle the application's colour theme.
 * Can be either light or dark.
 */
function toggleTheme() {
    // Set `theme` to opposite of what it is currently
}

/**
 * Get the application's current colour theme name.
 */
function getTheme() {
    // Return `theme` string
}

/**
 * Toggle visibility of note textbox and title.
 * Usage:
 *     - "New Note" - toggle note area on
 *     - "Save" + "Cancel" - both will toggle area off
 * 
 *  @param {String} title Title of note to load note area with
 */
function toggleNoteArea(force = false) {
    // TODO: use "hidden" class with short animation?

    if (note_area_open || force) {
        NEW_NOTE.style.visibility = 'hidden';
        NEW_NOTE_BUTTON.style.visibility = 'initial';
    } else {
        NEW_NOTE.style.visibility = 'initial';
        NEW_NOTE_BUTTON.style.visibility = 'hidden';
    }

    NOTE_VIEW.style.visibility = 'hidden';

    if (force) {
        note_area_open = false;
        return;
    }

    note_area_open = !note_area_open;
}

function viewNote(title) {

    toggleNoteArea(true);

    note = getNoteByTitle(title);

    NOTE_VIEW.style.visibility = 'initial';
    NEW_NOTE_BUTTON.style.visibility = 'hidden';

    NOTE_VIEW_TITLE.innerHTML = note.title;
    NOTE_VIEW_CONTENT.innerHTML = note.content;
}

function hideNote() {

    NOTE_VIEW.style.visibility = 'hidden';
    NEW_NOTE_BUTTON.style.visibility = 'initial';

}

/**
 * Toggle visibility of the note list sidebar
 */
function toggleNoteList() {
    // TODO: use "hidden" class with short animation?
    if (note_list_open) {
        HAMBURGER_MENU.style.visibility = 'hidden';
    } else {
        HAMBURGER_MENU.style.visibility = 'initial';
    }

    note_list_open = !note_list_open;
}

/**
 * Create a new note.
 */
function saveNote() {
    // TODO: Reload note area to view their new note via `toggleNoteArea(true, title)`
    title = NOTE_TITLE.value.trim();

    if (title == '') {
        alert('Please enter a title!');
        return;
    }

    content = NOTE_CONTENT.value;

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
 * This will directly output an HTML string which can be used in an elements `innerHtml`
 */
function listNotes() {
    output = '';

    noteArray.forEach(note => {
        output += `<li class="note-list-item" onclick="viewNote('${note.title}')">${note.title}</li>`;
    });

    NOTE_LIST_ITEMS.innerHTML = output;
}

/**
 * Get content for the note stored with the supplied title when a note is clicked on side list.
 * Will return `undefined` if note does not exist.
 * 
 * @param {String} title Title of note to find
 */
function getNoteByTitle(title) {

    for (note of noteArray) {
        if (note.title == title) {
            return note;
        }
    }

    return undefined;
}

/**
 * When the page loads:
 *     - Initialize our element variables for easy reuse
 *     - Hide elements which require being manually opened
 *     - Set the sidebar of all notes
 *     - Set the theme switcher button text
 */
window.onload = () => {
    // TODO: use `getTheme()` to get theme string name and load into theme button
    HAMBURGER_MENU = document.getElementById('hamburger-menu');
    HAMBURGER_MENU.style.visibility = 'hidden';

    NEW_NOTE_BUTTON = document.getElementById('new-note-button');

    NEW_NOTE = document.getElementById('new-note');
    NEW_NOTE.style.visibility = 'hidden';

    NOTE_LIST_ITEMS = document.getElementById('note-list-items');

    NOTE_TITLE = document.getElementById('note_title');
    NOTE_CONTENT = document.getElementById('note_content');

    NOTE_VIEW = document.getElementById('note-view');
    NOTE_VIEW.style.visibility = 'hidden';
    NOTE_VIEW_TITLE = document.getElementById('note-view-title');
    NOTE_VIEW_CONTENT = document.getElementById('note-view-content');

    listNotes();
}
