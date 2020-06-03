import { initialNotes } from './noteBuilder'

/* 
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
|
*/

const wickihaydenPattern = [4, 2, 0, -2, -4, 6, 4, 2, 0, -2, -4, -6]

/* 
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
|
*/

const updateNotePosition = pattern => {
    initialNotes.forEach(note => {
        note.position = note.midiVal + pattern[note.position]
    })
}

/* 
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
|
*/

updateNotePosition(wickihaydenPattern)

/* 
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
|
*/

const isomorphicNotes = initialNotes.sort(
    (note1, note2) => note1.position - note2.position
)

/* 
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
|
*/

const sortedNotes = isomorphicNotes.reverse()

/* 
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
|
*/

export const group1 = sortedNotes.filter(note => note.filtered)
export const group2 = sortedNotes.filter(note => !note.filtered)
