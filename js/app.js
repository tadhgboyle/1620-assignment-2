
/**
 * HTML element variables
 */
let hamburger_menu = null;
let new_note_button = null;
let new_note = null;
let note_list_items = null;
let note_title = null;
let note_content = null;

/**
 * Whether the notepad area and buttons are shown.
 * If false, the `new_note_button` div will be shown instead
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
    },
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
function toggleNoteArea(title = null) {
    // Will need another global variable `noteArea`
    // If `noteArea` is true, set it to false
    //  - then hide the note area
    // Else, 
    //  - Show note area
    //      - Are they viewing a note? If yes, show <p></p> with note contents
    //      - Are they editing a note? If yes, show a text area with note contents
    if (title != null) {
    } else {
        if (note_area_open) {
            new_note.style.visibility = 'hidden';
            new_note_button.style.visibility = 'initial';
        } else {
            new_note.style.visibility = 'initial';
            new_note_button.style.visibility = 'hidden';
        }

        note_area_open = !note_area_open;
    }
}

/**
 * Toggle visibility of the note list sidebar
 */
function toggleNoteList() {
    if (note_list_open) {
        hamburger_menu.style.visibility = 'hidden';
    } else {
        hamburger_menu.style.visibility = 'initial';
    }

    note_list_open = !note_list_open;
}

/**
 * Create a new note.
 */
function saveNote() {
    // TODO: Reload note area to view their new note via `toggleNoteArea(true, title)`
    title = note_title.value;

    if (title === '') {
        alert('Please enter a title!');
        return;
    }

    content = note_content.value;

    if (content == '') {
        alert('Please enter content!');
        return;
    }

    if (getNoteByTitle(title) !== undefined) {
        alert('A Note with that title already exists!');
        return;
    }

    noteArray.push({
        title: title,
        content: content
    });

    note_title.value = '';
    note_content.value = '';

    listNotes();
    toggleNoteArea();
}

/**
 * List all note titles in an HTML list.
 * This will directly output an HTML string which can be used in an elements `innerHtml`
 */
function listNotes() {
    output = '';

    noteArray.forEach(note => {
        output += ('<li class="note-list-item" onclick="getNoteByTitle(' + note.title + ')">' + note.title + '</li>');
    });

    note_list_items.innerHTML = output;
}

/**
 * Get content for the note stored with the supplied title when a note is clicked on side list.
 * Will return `undefined` if note does not exist.
 * 
 * @param {String} title Title of note to find
 */
function getNoteByTitle(title) {
    // Loop notes in `noteArray` until the title matches
    // If title doesnt match, return `undefined`
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
    hamburger_menu = document.getElementById('hamburger-menu');
    hamburger_menu.style.visibility = 'hidden';

    new_note_button = document.getElementById('new-note-button');

    new_note = document.getElementById('new-note');
    new_note.style.visibility = 'hidden';

    note_list_items = document.getElementById('note-list-items');

    note_title = document.getElementById('note_title');
    note_content = document.getElementById('note_content');

    listNotes();
}
