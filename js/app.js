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
 *  @param {Boolean} viewing Whether they are viewing an existing note or creating a new one
 *  @param {String} title Title of note to load note area with
 */
function toggleNoteArea(viewing, title = null) {
    // Will need another global variable `noteArea`
    // If `noteArea` is true, set it to false
    //  - then hide the note area
    // Else, 
    //  - Show note area
    //      - Are they viewing a note? If yes, show <p></p> with note contents
    //      - Are they editing a note? If yes, show a text area with note contents
}

/**
 * Create a new note.
 * 
 * @param {String} title Unique title for this note
 * @param {String} content Content to be saved
 */
function saveNote(title, content) {
    // Get values of textarea and title elements via `document.getElementById()`
    // Store to `noteArray`
    // Reload sidebar of notes
    // Reload note area to view their new note via `toggleNoteArea(true, title)`
}

/**
 * List all note titles in an HTML list.
 * This will directly output an HTML string which can be used in an elements `innerHtml`
 */
function listNotes() {
    // Loop all notes in `noteArray`
    // Append string html <li></li> to output string
    // Return output string for loading in sidebar
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
 *     - Set the sidebar of all notes
 *     - Set the theme switcher button text
 */
window.onload = () => {
    // use `listNotes()` to populate sidebar
    // use `getTheme()` to get theme string name and load into theme button
}
