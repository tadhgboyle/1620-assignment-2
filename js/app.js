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

}

/**
 * Get the application's current colour theme name.
 */
function getTheme() {
    
}

/**
 * Toggle visibility of note textbox and title.
 * Usage:
 *     - "New Note" - toggle note area on
 *     - "Save" + "Cancel" - both will toggle area off
 */
function toggleNoteArea() {

}

/**
 * Create a new note.
 * 
 * @param {String} title Unique title for this note
 * @param {String} content Content to be saved
 */
function saveNote(title, content) {

}

/**
 * List all note titles in an HTML list.
 * This will directly output an HTML string which can be used in an elements `innerHtml`
 */
function listNotes() {

}

/**
 * Get content for the note stored with the supplied title when a note is clicked on side list.
 * Will return `undefined` if note does not exist.
 * 
 * @param {String} title Title of note to find
 */
function getNoteByTitle(title) {

}

/**
 * When the page loads:
 *     - Set the side bar of all notes
 *     - Set the theme switcher button text
 */
window.onload = () => {
    
}
